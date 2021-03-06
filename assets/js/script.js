// global variables
var workStart = 7;
var workEnd = 18;

// planner container for the scheduler
var plannerEl = $('#planner');
plannerEl.empty();

// updates clock to allow the user to see current time
$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'));

    var update = function () {
        time = moment();
        timing.html(time.format('h:mm:ss A'));
    };

    timing = $('#currentTime');
    update();
    setInterval(update, 1000);
});

// appends planner's elements to the page and generates hours
for (let hour = workStart; hour <= workEnd; hour++) {
    var index = hour - 8;
    
        // separate hour, description, and button into three functions
        var rowEl = $('<div>');
        rowEl.addClass('row time-block');
        rowEl.attr('workTime', hour);

        var timeEl = $('<div>');
        timeEl.attr('id', hour);
        timeEl.addClass('col-1 hour');

        var workHourEl = $('<span>');
        workHourEl.attr('id', 'workTime');

        var isHour = 0;
        var amPM = '';
        if (hour > 12) {
            isHour = hour - 12;
            amPM = 'PM';
        } else if (hour < 12) {
            isHour = hour;
            amPM = 'AM';
        } else {
            isHour = 12;
            amPM = 'PM';
        }

        timeEl.text(isHour);
        workHourEl.text(amPM);
        plannerEl.append(rowEl);
        rowEl.append(timeEl);
        timeEl.append(workHourEl);

        var eventEl = $('<div>');
        eventEl.attr('id', 'eventCol');
        eventEl.addClass('col-10');
        eventEl.text('be productive');
        // if has entry for hour(hour) {eventEl.text(getHourData(hour))}
        // getHourData will access the localstorage and display the data
        rowEl.append(eventEl);

        var iEl = $('<i>');
        rowEl.append(iEl);
    
        var saveEl = $('<button>');
        saveEl.attr('id', 'saveCol');
        saveEl.addClass('saveBtn col-1');
        saveEl.text('be saved');
        rowEl.append(saveEl);
        
        
        // add ability to get info from localstorage
    
    rowColors(eventEl, hour);
    getHourData();
}

    // updates the row's colors for each of viewing day
    function rowColors(eventEl, hour) {
        var currentTime = parseInt(moment().format('HH'));

        if (hour < currentTime) {
            eventEl.addClass('past');
        } else if (hour === currentTime) {
            eventEl.addClass('present');
        } else {
            eventEl.addClass('future');
        }

    }
    
$('#saveCol').on('click', function () {
    var hour = $('#timeCol').text();
    var eventDesc = $('#eventCol').text();
    
    localStorage.setItem(hour, eventDesc);
});
    
    function getHourData(hour) {
        localStorage.getItem(hour);
    }