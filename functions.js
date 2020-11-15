var chrono;
var realTime;

function updateTime(){
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
function updateDateEvent(date = new Date()){
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    day = date.getDate();
    if (day<10) day = "0" + day;
    var eventDay = getEventByDate(date);
    $('#currentDateEvent').html(day + " " + months[date.getMonth()]);

    $("#eventsList").empty();
    eventDay.forEach(function(elem){
        $("#eventsList").append(`
            <div class="thumb">
                <div id="imgEventTime" class="outer-div" style="background-image: url(images/icons/fond.png);">
                    <div class="inner-div ${elem.img}" style="margin: auto;"></div>
                </div>
            </div>  
            <div class="caption" style="height: auto !important;">
                <h6 class="text-semibold no-margin text-center">${elem.title}</h6>
            </div>
        `);
    });
    
}
function isMobile(){
    return ($("[name='hemisphereRadios']:visible").length === 0) ? '-mobile' : '';
}
function getHemisphereSelected(){
    return $("[name='hemisphereRadios" + isMobile() + "']:checked").val();
}
function updateCounter(time){
    $('#block-next-update-time').html(time);
}

$(function(){

    updateDateEvent();
    
    //setInterval(updateTime,1000);

    $("#btn-show-modal-change-date-event").on('click', function(e){
        e.preventDefault();
        $("#modal_change_date_event").modal('show');
    })

    $("#btn-apply-change-event-date").on('click', function(e){
        e.preventDefault();
        var date = new Date()
        var day = $("[name='selectDayEvent']").val();
        var month = $("[name='selectMonthEvent']").val();
        console.log(day);
        console.log(month);
        var dateString = date.getFullYear() + "-" + month + "-" + day;
        date = new Date(dateString);
        console.log(dateString);
        console.log(date);
        updateDateEvent(date);
        $("#modal_change_date_event").modal('hide');
    })

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

    $("[name='creatureSort'], [name='creatureSort-mobile']").on('change', function(){
        switch($(this).val()){
            case "name":
                insectSortByName();
                fishSortByName();
                marineSortByName();
                break;
            case "location":
                insectSortByLocation();
                fishSortByLocation();
                marineSortByLocation();
                break;
            case "price_asc":
                insectSortByPriceAsc();
                fishSortByPriceAsc();
                marineSortByPriceAsc();
                break;
            case "price_desc":
                insectSortByPriceDesc();
                fishSortByPriceDesc();
                marineSortByPriceDesc();
                break;
            default:
                break;
        }
        loadCreatures();
    });

    $("#searchByName").on("focusin", function(){
        $("[name='creatureTypeRadios" + isMobile() + "'][value='all']").prop('checked', true);
        $("[name='creatureTypeRadios" + isMobile() + "']").uniform();
        $("[name='periodRadios" + isMobile() + "'][value='all']").prop('checked', true);
        $("[name='periodRadios" + isMobile() + "']").uniform();
        loadCreatures();
    });
    $("#searchByName").on("keyup", function(){
        var value = $(this).val();
        $(".animals-name").each(function(index, elem){
            if($(this).text().toUpperCase().includes(value.toUpperCase()))
                $(this).parent().parent().parent().show()
            else
                $(this).parent().parent().parent().hide()
        });
    });

    $("[name='creatureTypeRadios'], [name='creatureTypeRadios-mobile']").on('change',function(){
        loadCreatures();
    });
    $("[name='hemisphereRadios'], [name='hemisphereRadios-mobile']").on('change',function(){
        loadCreatures();
    });

    $("[name='periodRadios'], [name='periodRadios-mobile']").on("change", function(){

        $("#block-customPeriod" + isMobile()).hide();
        $("#block-next-update").hide();
        clearInterval(chrono);
        clearInterval(realTime);
        
        switch ($("[name='periodRadios" + isMobile() + "']:checked").val()) {    
            case 'currently':
                console.log('Currently period');
                loadCreatures();
                chronoTime = 60; //In second
                updateCounter(chronoTime);
                $("#block-next-update").show();
                chrono = setInterval(function(){
                    chronoTime--;
                    updateCounter(chronoTime);
                },1100);    
                realTime = setInterval(function(){
                    loadCreatures();
                    clearInterval(chrono);
                    chronoTime = 60; //In second
                    chrono = setInterval(function(){
                        updateCounter(chronoTime);
                        chronoTime--;
                    },1000);
                }, 61500);
                break;
            case 'custom':
                $("#block-customPeriod" + isMobile()).show();
                loadCreatures();
                break;
            default:
                loadCreatures();
                break;
        }    

    });

    $("[name='selectMonth'], [name='selectMonth-mobile']").on('change', function(){
        loadCreatures();
    });
    $("[name='selectTime'], [name='selectTime-mobile']").on('change', function(){
        loadCreatures();
    });

});