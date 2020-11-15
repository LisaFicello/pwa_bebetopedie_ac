function getNameLower(name){
    name = name.replace("'", "");
    name = name.replace(/\s+/g, '_').toLowerCase();
    return name;
}
function getSortedData(data, prop, isAsc) {
    return data.sort((a, b) => (a[prop] < b[prop] ? -1 : 1) * (isAsc ? 1 : -1));
}
function filterMonthFunction(element) {
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth() + 1;
    var hemisphereSelected = $("[name='hemisphereRadios" + isMobile() + "']:checked").val();
    return element["months"][hemisphereSelected]["array"].indexOf(currentMonth) != -1;
}
function filterCurrentMonthAndTimeFunction(element) {
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMonth = currentDate.getMonth() + 1;
    var hemisphereSelected = $("[name='hemisphereRadios" + isMobile() + "']:checked").val();
    return (element["times"]["array"].indexOf(currentHours) != -1 && element["months"][hemisphereSelected]["array"].indexOf(currentMonth) != -1)
}
function filterSpecificMonthAndTimeFunction(element) {

    var hemisphereSelected = $("[name='hemisphereRadios" + isMobile() + "']:checked").val();
    var timeSelected = parseInt($("[name='selectTime" + isMobile() + "']").val());
    var monthSelected = parseInt($("[name='selectMonth" + isMobile() + "']").val());

    var times = element["times"]["array"];
    var months = element["months"][hemisphereSelected]["array"];

    if(isNaN(timeSelected) && isNaN(monthSelected))
        return element
    else if(!isNaN(timeSelected) && isNaN(monthSelected))
        return (times.indexOf(timeSelected) != -1)
    else if(isNaN(timeSelected) && !isNaN(monthSelected))
        return (months.indexOf(monthSelected) != -1)
    else if(!isNaN(timeSelected) && !isNaN(monthSelected))
        return (times.indexOf(timeSelected) != -1 && months.indexOf(monthSelected) != -1)

}
function getFilterData(data) {

    switch ($("[name='periodRadios" + isMobile() + "']:checked").val()) {
        case 'all':
            console.log('All period');
            return data;
        case 'currently':
            console.log('Currently period');
            return data.filter(filterCurrentMonthAndTimeFunction);
        case 'month':
            console.log('In month period');
            return data.filter(filterMonthFunction);
        case 'custom':
            console.log('Custom period');
            return data.filter(filterSpecificMonthAndTimeFunction);
        default:
            return data;
    }

}
function getCreatureNameById(creature, id) {
    var creatureSelected = getCreatureById(creature, id);
    return creatureSelected["name"];
}
function getCreatureById(creature, id) {
    return creature.filter(c => c.id == id)[0];
}

// Insects
function getInsectSpriteClassNameById(id) {
    var insectName = getCreatureNameById(insectData,id);
    insectName = getNameLower(insectName);
    return (getCreatureById(insectData, id) == null) ? "" : "sprite-insect sprite-insect-" + insectName;
}
function insectSortByName() {
    return getSortedData(insectData, "name", true);
}
function insectSortByLocation() {
    return getSortedData(insectData, "location", true);
}
function insectSortByPriceAsc() {
    return getSortedData(insectData, "price", true);
}
function insectSortByPriceDesc() {
    return getSortedData(insectData, "price", false);
}
function getFilterInsectes(){
    return getFilterData(insectData);
}

// Fishs
function getFishSpriteClassNameById(id) {
    var fishName = getCreatureNameById(fishData,id);
    fishName = getNameLower(fishName);
    return (getCreatureById(fishData, id) == null) ? "" : "sprite-fish sprite-fish-" + fishName;
}
function fishSortByName() {
    return getSortedData(fishData, "name", true);
}
function fishSortByLocation() {
    return getSortedData(fishData, "location", true);
}
function fishSortByPriceAsc() {
    return getSortedData(fishData, "price", true);
}
function fishSortByPriceDesc() {
    return getSortedData(fishData, "price", false);
}
function getFilterFish(){
    return getFilterData(fishData);
}

// Marines
function getMarineSpriteClassNameById(id) {
    var marineName = getCreatureNameById(marineData,id);
    marineName = getNameLower(marineName);
    return (getCreatureById(marineData, id) == null) ? "" : "sprite-marine sprite-marine-" + marineName;
}
function marineSortByName() {
    return getSortedData(marineData, "name", true);
}
function marineSortByLocation() {
    return getSortedData(marineData, "location", true);
}
function marineSortByPriceAsc() {
    return getSortedData(marineData, "price", true);
}
function marineSortByPriceDesc() {
    return getSortedData(marineData, "price", false);
}
function getFilterMarine(){
    return getFilterData(marineData);
}

// Events
var dayEventSelected;
var monthEventSelected;

function getEventSpriteClassNameById(event) {
    var eventTitle = getNameLower(event["title"]);
    return (event == null) ? "" : "sprite-event sprite-event-" + eventTitle;
}
function getEventImgUrlById(event) {
    var eventTitle = getNameLower(event["title"]);
    eventTitle = (eventTitle.includes('birthday')) ? "anniversary" : eventTitle;
    return (event == null) ? "" : "creatures/images/events/sprite-event-" + eventTitle + ".png";
}
function filterEvent(element) {
    return (element.day == dayEventSelected && element.month == monthEventSelected);
}
function getEventByDate(date = new Date()){
    var eventResult = [];
    dayEventSelected = date.getDate();
    monthEventSelected = date.getMonth() + 1;
    var eventFilter = eventData.filter(filterEvent);
    eventFilter.forEach(function(elem){
        var currentEvent = elem;
        currentEvent['img'] = getEventSpriteClassNameById(elem);
        currentEvent['url'] = getEventImgUrlById(elem);
        eventResult.push(currentEvent);
    });
    return eventResult;
}