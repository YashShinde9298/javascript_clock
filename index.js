let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");
let hrstxt = document.getElementById('hrs-txt');
let minstxt = document.getElementById("mins-txt");
let sectxt = document.getElementById("sec-txt");
let day = document.getElementById("day");
let date = document.getElementById("date");


setInterval(() => {
    let currentTime = new Date();
    if (currentTime.getHours() < 10) {
        hrs.innerHTML = "0" + currentTime.getHours();
    }
    else {
        hrs.innerHTML = currentTime.getHours();
    }

    if (currentTime.getMinutes() < 10) {
        mins.innerHTML = "0" + currentTime.getMinutes();
    }
    else {
        mins.innerHTML = currentTime.getMinutes();
    }

    if (currentTime.getSeconds() < 10) {
        sec.innerHTML = "0" + currentTime.getSeconds();
    } else {
        sec.innerHTML = currentTime.getSeconds();
    }

    if (currentTime.getMonth() == 0) {
        date.innerHTML = currentTime.getDate() + " " + "JAN" + " " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 1) {
        date.innerHTML = currentTime.getDate() + " " + "FEB" + " " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 2) {
        date.innerHTML = currentTime.getDate() + " " + "MAR" + " " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 3) {
        date.innerHTML = currentTime.getDate() + " " + "APR" + " " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 4) {
        date.innerHTML = currentTime.getDate() + "  " + "MAY" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 5) {
        date.innerHTML = currentTime.getDate() + "  " + "JUNE" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 6) {
        date.innerHTML = currentTime.getDate() + "  " + "JULY" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 7) {
        date.innerHTML = currentTime.getDate() + "  " + "AUG" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 8) {
        date.innerHTML = currentTime.getDate() + "  " + "SEP" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 9) {
        date.innerHTML = currentTime.getDate() + "  " + "OCT" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 10) {
        date.innerHTML = currentTime.getDate() + "  " + "NOV" + "  " + currentTime.getFullYear();
    }
    else if (currentTime.getMonth() == 11) {
        date.innerHTML = currentTime.getDate() + "  " + "DEC" + "  " + currentTime.getFullYear();
    }

    if (currentTime.getDay() == 0) {
        day.innerHTML = "SUNDAY"
    }
    else if (currentTime.getDay() == 1) {
        day.innerHTML = "MONDAY"
    }
    else if (currentTime.getDay() == 2) {
        day.innerHTML = "TUESDAY"
    }
    else if (currentTime.getDay() == 3) {
        day.innerHTML = "WEDNESDAY"
    }
    else if (currentTime.getDay() == 4) {
        day.innerHTML = "THURSDAY"
    }
    else if (currentTime.getDay() == 5) {
        day.innerHTML = "FRIDAY"
    }
    else if (currentTime.getDay() == 6) {
        day.innerHTML = "SATURDAY"
    }


}, 1000)

let currentTime = new Date();

if (currentTime.getHours() <= 1) {
    hrstxt.innerHTML = "HR";
}
else {
    hrstxt.innerHTML = "HRS";
}

if (currentTime.getMinutes() <= 1) {
    minstxt.innerHTML = "MIN";
}
else {
    minstxt.innerHTML = "MINS";
}
