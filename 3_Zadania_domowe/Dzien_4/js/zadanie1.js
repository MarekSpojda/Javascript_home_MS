document.addEventListener("DOMContentLoaded", function () {
    //Task1
    let buttonUp = document.querySelector('button .fa-arrow-circle-up').parentElement;
    let buttonDown = document.querySelector('button .fa-arrow-circle-down').parentElement;
    let inputCounter = document.querySelector('input#spinnerValue');
    let step = document.querySelector('input#step').getAttribute('value');
    let max = document.querySelector('#max').getAttribute('value');
    let min = document.querySelector('#min').getAttribute('value');
    let save = document.querySelector('button.saveSettings');
    let timer = -1;
    let progressBar = document.querySelector('div.progressInner');

    let updateBar = function () {
        progressBar.style.width = (((inputCounter.value - min) / (max - min)) * 100) + '%';
    };

    let updateCounter = function () {
        if (parseFloat(inputCounter.value) >= parseFloat(max)) {
            inputCounter.value = max;
        }
        if (parseFloat(inputCounter.value) <= parseFloat(min)) {
            inputCounter.value = min;
        }
    };

    save.addEventListener('click', function () {
        step = document.querySelector('input#step').value;
        max = document.querySelector('#max').value;
        min = document.querySelector('#min').value;
        updateCounter();
        updateBar();
    });

    buttonUp.addEventListener('mousedown', function () {
        if (timer === -1) {
            timer = setInterval(function () {
                inputCounter.value = parseFloat(inputCounter.value) + parseFloat(step);
                updateCounter();
                updateBar();
            }, 50);
        }
    });

    buttonUp.addEventListener('mouseup', function () {
        if (timer !== -1) {
            clearInterval(timer);
            timer = -1;
        }
    });
    buttonDown.addEventListener('mousedown', function () {
        if (timer === -1) {
            timer = setInterval(function () {
                inputCounter.value = parseFloat(inputCounter.value) - parseFloat(step);
                updateCounter();
                updateBar();
            }, 50);
        }
    });

    buttonDown.addEventListener('mouseup', function () {
        if (timer !== -1) {
            clearInterval(timer);
            timer = -1;
        }
    });
});
