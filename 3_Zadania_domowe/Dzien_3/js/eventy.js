document.addEventListener("DOMContentLoaded", function () {
    //Task1
    let links = document.querySelectorAll('section a');
    links[0].addEventListener('click', function () {
        this.nextElementSibling.style.display = 'inline';
    });

    links[1].addEventListener('mouseenter', function () {
        this.nextElementSibling.style.display = 'inline';
    });
});