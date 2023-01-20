const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let counterValue = 0;
let speedValue = 0;
let nowClickTime;
let previousClickTime = new Date();

cookie.addEventListener("mousedown", function() {
    nowClickTime = new Date();
    cookie.width = 300;
    counterValue++;
    clicker__counter.textContent = counterValue;
    speedValue = (1000 / (nowClickTime - previousClickTime)).toFixed(2);
});

cookie.addEventListener("mouseup", function() {
    cookie.width = 200;
    clicker__speed.textContent = speedValue;
    previousClickTime = nowClickTime;
});