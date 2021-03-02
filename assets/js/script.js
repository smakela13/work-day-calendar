var timeEl = $("#timeCol");
var eventEl = $("#eventCol");
var saveEl = $("#saveCol");

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

function renderTimes() {
    
}

for (let hour = 8; hour <= 18; hour++) {
    var index = hour - 8;

    var rowEl = $("<div>");
    rowEl.addClass("row");
    rowEl.attr("workTime", hour);
    
    var colEl = $("<div>");
    colEl.addClass("col");

    var workHourEl = $("<span>");
    workHourEl.addClass("workTime");

    var isHour = 0;
    var amPM = "";
    if (hour >= 12) {
        isHour = hour - 12;
        amPM = "PM"
    } else {
        isHour = hour;
        amPM = "AM";
    }
}

rowEl.append(colEl);

moment().local();