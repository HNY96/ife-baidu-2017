'use strict'

window.onload = init;
var paintArray = [];

function paint(paintArray) {
    var i = 0;
    var handler = setInterval(function() {
        if (i <= paintArray.length) {
            if (i == paintArray.length) {
                paintArray[i-1].classList.remove('mark');
                return;
            }
            paintArray[i].classList.add('mark');
            if (i > 0) {
                paintArray[i-1].classList.remove('mark');
            }
            i++;
        }
    }, 100);
}

function paintPreOrder(target) {
    paintArray.push(target);
    if (target.children[0]) {
        paintPreOrder(target.children[0]);
        paintPreOrder(target.children[1]);
    }
}

function paintMidOrder(target) {
    if (target.children[0]) {
        paintMidOrder(target.children[0]);
        paintArray.push(target);
        if (target.children[1]) {
            paintMidOrder(target.children[1]);
        }
    } else {
        paintArray.push(target);
    }
}

function paintLastOrder(target) {
    if (target.children[0]) {
        paintLastOrder(target.children[0]);
        if (target.children[1]) {
            paintLastOrder(target.children[1]);
            paintArray.push(target);
        }
    } else {
        paintArray.push(target);
    }
}

function preOrder() {
    var target = document.getElementsByClassName('flex-container');
    paintPreOrder(target[0]);
    console.log(paintArray);
    paint(paintArray);
}

function midOrder() {
    var target = document.getElementsByClassName('flex-container');
    paintMidOrder(target[0]);
    paint(paintArray);
}

function lastOrder() {
    var target = document.getElementsByClassName('flex-container');
    paintLastOrder(target[0]);
    paint(paintArray);
}

function init() {
    document.getElementById('preOrder').addEventListener('click', preOrder, false);
    document.getElementById('midOrder').addEventListener('click', midOrder, false);
    document.getElementById('lastOrder').addEventListener('click', lastOrder, false);
}