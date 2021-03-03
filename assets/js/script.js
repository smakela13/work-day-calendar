/* var timeEl = $("#timeCol");
var eventEl = $("#eventCol");
var saveEl = $("#saveCol"); */
var plannerEl = $("#planner");

plannerEl.empty();


var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var update = function () {
    time = moment();
    timing.html(time.format("h:mm:ss A"));
}; 

$(document).ready(function () {
    timing = $('#currentTime')
    update();
    setInterval(update, 1000);
});

for (let hour = 7; hour <= 18; hour++) {
    var index = hour - 8;

    var rowEl = $("<div>");
    rowEl.addClass("row time-block");
    rowEl.attr("workTime", hour);
    
    var timeEl = $("<div>");
    timeEl.attr("id", "timeCol");
    timeEl.addClass("col-1 hour");

    var workHourEl = $("<span>");
    workHourEl.attr("id", "workTime");

    var isHour = 0;
    var amPM = "";
    if (hour >= 12) {
        isHour = hour - 12;
        amPM = "PM"
    } else {
        isHour = hour;
        amPM = "AM";
    }
    
    timeEl.text("9");
    workHourEl.text("AM");
    plannerEl.append(rowEl);
    rowEl.append(timeEl);
    timeEl.append(workHourEl);

    var eventEl = $("<div>");
    eventEl.attr("id", "eventCol");

    eventEl.addClass("col-10");
    eventEl.addClass("past");
    eventEl.addClass("present");
    eventEl.addClass("future");

    eventEl.text("be productive");
    rowEl.append(eventEl);

    var saveEl = $("<div>");
    saveEl.attr("id", "saveCol");
    saveEl.addClass("saveBtn i:hover col-1");
    saveEl.text("be saved");
    rowEl.append(saveEl);
}

function rowColors() {
    if (timing) {
      
    } else {
      
    }
}


moment().local();