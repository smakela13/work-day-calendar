// global variables
var workStart = 8;
var workEnd = 18;

// planner container for the scheduler
var plannerEl = $('#planner');

// updates clock to allow the user to see current time
$(document).ready(function () {
    var update = function () {
    
    date.html(moment().format('dddd, MMMM Do, YYYY'));
    timing.html(moment().format('h:mm:ss A'));
    };

    date = $('#currentDay');
    timing = $('#currentTime');
    update();
    setInterval(update, 1000);
});

// appends planner's elements to the page and generates hours
for (let hour = workStart; hour <= workEnd; hour++) {
    var index = hour - 11;
    
    // separate hour, description, and button into three functions
    var rowEl = $('<div>');
    rowEl.addClass('row time-block');
    rowEl.attr('plannerHour', hour);

    var timeEl = $('<div>');
    timeEl.attr('id', 'hour');
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

    var eventEl = $('<input>');
    eventEl.addClass('eventCol col-10');
    eventEl.attr('type', 'text');
    var schedule = getHourData();
    schedule.forEach(function (calendarEvent) {
        if (calendarEvent.hour == hour) {
            eventEl.attr('placeholder', calendarEvent.plans);
        }
    })
    // if has entry for hour(hour) {eventEl.text(getHourData(hour))}
    // getHourData will access the localstorage and display the data

    timeEl.text(isHour);
    workHourEl.text(amPM);
    plannerEl.append(rowEl);
    rowEl.append(timeEl);
    timeEl.append(workHourEl);
    rowEl.append(eventEl);

    var iEl = $('<i>');
    iEl.addClass('fas fa-save');
        
    var saveEl = $('<button>');
    saveEl.attr('id', `saveCol`);
    saveEl.addClass('saveBtn col-1');
    
    rowEl.append(saveEl);
    saveEl.append(iEl);
    
    // add ability to get info from localstorage
    
    rowColors(eventEl, hour);
    

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
    
$(document).on('click', 'i', function (event) {
    event.preventDefault();

    var rowRef = event.target.parentNode.parentNode;
    var storedPlan = getHourData();
    console.log(storedPlan);

    var myPlans = {
        "hour": $(rowRef).attr('plannerhour'),
        "plans": $(rowRef).find('input').val(),
    };
    console.log(myPlans);
    console.log(event);
    
    storedPlan.push(myPlans);
        
    localStorage.setItem("plan", JSON.stringify(storedPlan));
});

function getHourData() {
    var storedEntry = JSON.parse(localStorage.getItem('plan'));
    if (storedEntry == null) {
        storedEntry = [];
    }
    return storedEntry;
}
