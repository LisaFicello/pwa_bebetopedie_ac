var chrono;
var realTime;

function updateCounter(time){
    $('#block-next-update-time').html(time);
}

function showCurrentCreatures(creatureSelector, hemisphereSelected){
    console.log('NEW Currently Period');
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMonth = currentDate.getMonth() + 1;
    $(creatureSelector).each(function(index, elem){
        var hours = $(this).find("span[data-times-array]").attr("data-times-array").split(',');
        var months = $(this).find("span[data-months-" + hemisphereSelected + "-array]").attr("data-months-" + hemisphereSelected + "-array").split(',');
        if(hours.indexOf(currentHours.toString()) != -1 && months.indexOf(currentMonth.toString()) != -1)
            $(this).parent().parent().show();
    });
}

function showSpecificCreatures(these){
    $(".creatures-div").children().hide();
    var isMobile = (these.attr('name').includes('-mobile')) ? '-mobile' : '';
    var creatureSelected = $("[name='creatureTypeRadios" + isMobile + "']:checked").val();
    var hemisphereSelected = $("[name='hemisphereRadios" + isMobile + "']:checked").val();
    var creatureSelector = (creatureSelected == "all") ? ".creatures-div  .caption" : "#" + creatureSelected + " .caption";
    var timeSelected = $("[name='selectTime"+ isMobile +"']").val();
    var monthSelected = $("[name='selectMonth"+ isMobile +"']").val();

    console.log(timeSelected);
    console.log(timeSelected.length);
    console.log(monthSelected);
    console.log(monthSelected.length);

    $(creatureSelector).each(function(index, elem){
        var hours = $(this).find("span[data-times-array]").attr("data-times-array").split(',');
        var months = $(this).find("span[data-months-" + hemisphereSelected + "-array]").attr("data-months-" + hemisphereSelected + "-array").split(',');
        if(timeSelected.length == 0 && monthSelected.length == 0){
            console.log("timeSelected.length == 0 && monthSelected.length == 0")
            $(this).parent().parent().show();
        }else if(timeSelected.length > 0 && monthSelected.length == 0 && hours.indexOf(timeSelected) != -1){
            console.log("timeSelected.length > 0 && monthSelected.length == 0 && hours.indexOf(timeSelected.toString()) != -1");
            $(this).parent().parent().show();
        }else if(timeSelected.length == 0 && monthSelected.length > 0 && months.indexOf(monthSelected) != -1){
            console.log("timeSelected.length == 0 && monthSelected.length > 0 && months.indexOf(monthSelected.toString()) != -1");
            $(this).parent().parent().show();
        }else if(timeSelected.length > 0 && monthSelected.length > 0 && hours.indexOf(timeSelected) != -1 && months.indexOf(monthSelected) != -1){
            console.log("timeSelected.length > 0 && monthSelected.length > 0 && hours.indexOf(timeSelected.toString()) != -1 && months.indexOf(monthSelected.toString()) != -1");
            $(this).parent().parent().show();
        }
    });
}

function horloge(){
    var hms = new Date();
    var h, m, s;
    h = hms.getHours();
    if (h<10) h = "0" + h;
    m = hms.getMinutes();
    if (m<10) m = "0" + m;
    s = hms.getSeconds();
    if (s<10) s = "0" + s;
    $('#currentTime').html(h + ' : ' + m + ' : ' + s);
}

function getEventByDate(){
    var event;
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth() + 1;
    eventData.forEach(function(elem,index){
        if(elem.day == currentDay && elem.month == currentMonth){
            event = elem;
            event['img'] = getEventSpriteClassNameById(elem.id);
        }
    });
    return event;
}

$(function(){

    setInterval(horloge,1000);

    var eventDay = getEventByDate();
    $("#titleEventTime").text(eventDay.title);
    $("#imgEventTime").addClass(eventDay.img);

    $('.select-search').select2();
    $(".styled").uniform({
        radioClass: 'choice'
    });

    $("#menu-mobile").on('click', function(){
        $("#block-search").removeClass('show-important');
        $("#block-sort-mobile").hide();
        $("#block-filter-mobile").hide();
    });
    $("#btn-show-panel-search").on('click', function(){
        $("#block-sort-mobile").hide();
        $("#block-filter-mobile").hide();
        $("#block-search").addClass('show-important');
    });
    $("#btn-show-panel-filter").on('click', function(){
        $("#block-search").removeClass('show-important');
        $("#block-sort-mobile").hide();
        $("#block-filter-mobile").show();
    });
    $("#btn-show-panel-sort").on('click', function(){
        $("#block-search").removeClass('show-important');
        $("#block-filter-mobile").hide();
        $("#block-sort-mobile").show();
    });

    $("#searchByName").on("keyup", function(){
        $("[name='creatureTypeRadios'][value='all'], [name='creatureTypeRadios-mobile'][value='all']").prop('checked', true);
        $("[name='creatureTypeRadios'], [name='creatureTypeRadios-mobile']").uniform();
        $("[name='creatureTypeRadios'], [name='creatureTypeRadios-mobile']").change();
        $("[name='periodRadios'][value='all'], [name='periodRadios-mobile'][value='all']").prop('checked', true);
        $("[name='periodRadios'], [name='periodRadios-mobile']").uniform();
        $("[name='periodRadios'], [name='periodRadios-mobile']").change();
        var value = $(this).val();
        $(".animals-name").each(function(index, elem){
            if($(this).text().toUpperCase().includes(value.toUpperCase()))
                $(this).parent().parent().parent().show()
            else
                $(this).parent().parent().parent().hide()
        });
    });

    $("[name='creatureTypeRadios'], [name='creatureTypeRadios-mobile']").on('change',function(){
        switch($(this).val()){
            case 'all':
                $(".creatures-div").show();
                break;
            default:
                $(".creatures-div").hide();
                $("#" + $(this).val()).show();
                break;
        }
    });
    $("[name='hemisphereRadios'], [name='hemisphereRadios-mobile']").on('change',function(){
        var hemisphere = $(this).val();
        $(".creatures-div .caption").each(function(index, elem){
            var period = $(this).find("span[data-months-" + hemisphere + "-text]").attr("data-months-" + hemisphere + "-text").split(',');
            $(this).find('.period-text').text(period);
        });
    });

    $("[name='periodRadios'], [name='periodRadios-mobile']").on("change", function(){
        var isMobile = ($(this).attr('name').includes('-mobile')) ? '-mobile' : '';
        var creatureSelected = $("[name='creatureTypeRadios" + isMobile + "']:checked").val();
        var hemisphereSelected = $("[name='hemisphereRadios" + isMobile + "']:checked").val();
        $(".creatures-div").children().hide();
        $("#block-customPeriod" + isMobile).hide();
        $("#block-next-update").hide();
        clearInterval(chrono);
        clearInterval(realTime);
        switch ($(this).val()) {
            case 'all':
                console.log('All period');
                if(creatureSelected == "all")
                    $(".creatures-div").children().show();
                else
                    $("#" + creatureSelected).children().show();
                break;
            case 'currently':
                console.log('Currently period');
                console.log(creatureSelected);

                var creatureSelector = (creatureSelected == "all") ? ".creatures-div  .caption" : "#" + creatureSelected + " .caption";
                showCurrentCreatures(creatureSelector,hemisphereSelected);

                chronoTime = 10; //In second
                updateCounter(chronoTime);
                $("#block-next-update").show();
                chrono = setInterval(function(){
                    chronoTime--;
                    updateCounter(chronoTime);
                },1100);

                realTime = setInterval(function(){
                    showCurrentCreatures(creatureSelector,hemisphereSelected);
                    clearInterval(chrono);
                    chronoTime = 10; //In second
                    chrono = setInterval(function(){
                        updateCounter(chronoTime);
                        chronoTime--;
                    },1000);
                }, 11500);

                break;
            case 'month':
                console.log('In month period');

                var currentDate = new Date();
                var currentMonth = currentDate.getMonth() + 1;
                var creatureSelector = (creatureSelected == "all") ? ".creatures-div  .caption" : "#" + creatureSelected + " .caption";
                $(creatureSelector).each(function(index, elem){
                    var months = $(this).find("span[data-months-" + hemisphereSelected + "-array]").attr("data-months-" + hemisphereSelected + "-array").split(',');
                    if(months.indexOf(currentMonth.toString()) != -1)
                        $(this).parent().parent().show();
                });

                break;
            case 'custom':
                console.log('Custom period');
                $("#block-customPeriod" + isMobile).show();
                break;
            default:
                break;
        }
    });

    $("[name='selectMonth'], [name='selectMonth-mobile']").on('change', function(){
        showSpecificCreatures($(this));
    });

    $("[name='selectTime'], [name='selectTime-mobile']").on('change', function(){
        showSpecificCreatures($(this));
    });

});