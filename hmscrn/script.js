document.getElementById("style-switch-tog").onclick = function() {
    if (document.getElementById("style-switch-tog").checked == true) {
        document.body.className = "dark";
    } else if (document.getElementById("style-switch-tog").checked == false) {
        document.body.className = "light";
    } else {
        return false;
    }
}

function time() {
    
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    
    var meridian;
    
    if (hr >= 12) {
        meridian = "pm"
    } else {
        meridian = "am"
    }
    
    if (hr == 0) {
        hr = 12;
    }

    if (hr > 12) {
        hr = hr - 12;
    }

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (mn < 10) {
        mn = "0" + mn;
    }

    if (sc < 10) {
        sc = "0" + sc;
    }
    
    document.getElementById("clock").innerHTML = "<h1>" + `${hr}:${mn}:${sc} ${meridian}` + "</h1>";

    setTimeout(time, 1000);

}

function today() {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    
    let date = new Date();
    let dy = days[date.getDay()];
    let dt = date.getDate();
    let mo = months[date.getMonth()];
    let yr = date.getFullYear();

    document.getElementById("date").innerHTML = "<h1>" + `${dy}` + ", <br>" + `${dt} ${mo} ${yr}` + "</h1>";

    let calEl = document.getElementById("cal");
    let tds = calEl.getElementsByTagName("td");

    for (let index = 0; index < tds.length; index++) {
        let tdsDy = tds[index];
        let tdToday = tdsDy.innerText;
        if (tdToday == dt) {
            tds[index].className = "today";
        }
    }

    setTimeout(today, 1000);

}
