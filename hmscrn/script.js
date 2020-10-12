document.getElementById("style-switch-tog").onclick = function() {
    if (document.getElementById("style-switch-tog").checked == true) {
        document.body.className = "light";
    } else if (document.getElementById("style-switch-tog").checked == false) {
        document.body.className = "dark";
    } else {
        return false;
    }
}

function time() {
    
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();
    
    hr = (hr < 10) ? `0${hr}` : hr;
    mn = (mn < 10) ? `0${mn}` : mn;
    sc = (sc < 10) ? `0${sc}` : sc;
    
    document.getElementById("clock").innerHTML = "<h1>" + `${hr}:${mn}:${sc}` + "</h1>";

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

}

