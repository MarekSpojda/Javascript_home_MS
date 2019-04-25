$(function () {
    //$(document).ready(function () {
    let body = $('body');
    let spinner = $('<input id="spinner">');
    let table = body.find('table');
    table.before(spinner);
    spinner.spinner().attr('readonly', 'readonly').val(0);

    let saveButton = $('<button id="savebutton">').button({
        icon: "ui-icon-disk",
        showLabel: false
    });
    table.after(saveButton);

    let progressBar = $('<div id="progressBar">').progressbar({
        value: 0
    });
    progressBar.width('400px');

    //Function for update bar
    let updateBar = function () {
        let min = $('#min').val();
        let max = $('#max').val();
        let progressBarValue = ((spinner.val() - min) / (max - min)) * 100;
        progressBar.progressbar("value", progressBarValue);
    };

    //Adding event to spinner
    spinner.on("spin", function (event, ui) {
        updateBar();
    });

    saveButton.after(progressBar);

    saveButton.on('click', function () {
        let min = $('#min').val();
        spinner.spinner("option", "min", min);

        let max = $('#max').val();
        spinner.spinner("option", "max", max);

        let step = $('#step').val();
        spinner.spinner("option", "step", step);

        let spinnerVal = spinner.val();
        if (spinnerVal > max) {
            spinner.val(max);
        }

        if (spinnerVal < min) {
            spinner.val(min);
        }

        updateBar();
    });
});