//Task1.1
let menu = document.querySelector('#menu');

let getDataInfo = function (element) {
    let tab = [];
    let lis = element.children;
    for (let i = 0; i < lis.length; i++) {
        tab.push(lis[i].innerHTML);
    }
    return tab;
};

console.log("1.1: " + getDataInfo(menu));

//Task1.2
let mainContener = document.querySelector('#main-contener');
let getElementClass = function (element) {
    let tab = [];
    let classes = element.classList;
    for (let i = 0; i < classes.length; i++) {
        tab.push(classes[i]);
    }
    return tab;
};

console.log("1.2: " + getElementClass(mainContener));

//Task1.3
let pinkColor = document.querySelector('.pink-color');
let getElementText = function (element) {
    return element.innerText;
};

console.log("1.3: " + getElementText(pinkColor));

//Task1.4
let images = document.querySelectorAll(".images");
let getElementAlt = function (element) {
    let tab = [];
    for (let i = 0; i < element.length; i++) {
        tab.push(element[i].getAttribute("alt"));
    }
    return tab;
};

console.log("1.4: " + getElementAlt(images));

//Task1.5
let myLinks = document.querySelectorAll(".my-link");
let getElementHref = function (element) {
    let tab = [];
    for (let i = 0; i < element.length; i++) {
        tab.push(element[i].getAttribute("href"));
    }
    return tab;
};

console.log("1.5: " + getElementHref(myLinks));