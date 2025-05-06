var month = currentDate.getMonth();
var year = currentDate.getFullYear();

function decreaseMonth() {
    var currentDate = new Date();

    if (month == 0) {
        currentDate.setFullYear(year - 1);
        year = year - 1;
        month = 11;
        currentDate.setMonth(11);
    }
    else{
        currentDate.setMonth(month - 1);
        currentDate.setFullYear(year);
        month = month - 1;
    }
    createCalendar(currentDate);
}

function increaseMonth() {
    var currentDate = new Date();

    if (month == 11) {
        currentDate.setFullYear(year + 1);
        year = year + 1;
        month = 0;
        currentDate.setMonth(0);
    }
    else{
        currentDate.setMonth(month + 1);
        currentDate.setFullYear(year);
        month = month + 1;
    }
    createCalendar(currentDate);
}

function today(){
    var currentDate = new Date();
    month = currentDate.getMonth();
    year = currentDate.getFullYear();
    createCalendar(currentDate);
}