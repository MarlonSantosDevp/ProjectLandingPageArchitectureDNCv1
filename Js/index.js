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

let valueDisplays2 = document.querySelectorAll(".num2");
let interval2 = 5000;

valueDisplays2.forEach((valueDisplay2) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay2.getAttribute("data-num"));
    let duration = Math.floor(interval2 / endValue);
    let counter = setInterval(function () {
        startValue += 4000;
        let formattedValue = startValue.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
        valueDisplay2.textContent = formattedValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


