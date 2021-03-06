function onStart(){
    var date = new Date();

    var h = document.getElementById("hour");
    var m = document.getElementById("minute");
    var s = document.getElementById("second");

    s.style = 'transform-origin: left center;';
    s.style = 'transform: rotate(' + (date.getSeconds() * 6 - 90) + 'deg)';
    m.style = 'transform-origin: left center;';
    m.style = 'transform: rotate(' + (date.getMinutes() * 6 + (date.getSeconds() * 6) * 0.1 - 90) + 'deg)';
    h.style = 'transform-origin: left center;';
    h.style = 'transform: rotate(' + (date.getHours() * 30 + (date.getMinutes() * 6 + (date.getSeconds() * 6) * 0.1) * 0.5 - 90) + 'deg)';
    setInterval(rotate, 10, h, m, s);
}

function rotate(h, m, s){
    var date = new Date();

    s.style = 'transform: rotate(' + (date.getSeconds() * 6 - 90) + 'deg)';
    m.style = 'transform: rotate(' + (date.getMinutes() * 6 + (date.getSeconds() * 6) * 0.1 - 90) + 'deg)';
    h.style = 'transform: rotate(' + (date.getHours() * 30 + (date.getMinutes() * 6 + (date.getSeconds() * 6) * 0.1) * 0.5 - 90) + 'deg)';
}