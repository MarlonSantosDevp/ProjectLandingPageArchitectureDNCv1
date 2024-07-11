let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 2;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

let valueDisplaysnum2 = document.querySelectorAll(".num2");
let intervalnum2 = 5000;

valueDisplaysnum2.forEach((valueDisplaynum2) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplaynum2.getAttribute
        ("data-val2"));
    let duration = Math.floor(intervalnum2 / endValue);
    let counter = setInterval(function () {
        startValue += 4000;
        valueDisplaynum2.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});