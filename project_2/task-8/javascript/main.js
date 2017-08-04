'use strict'

window.onload = init;
var paintArray = [];

function search(paintArray, input) {
    var i = 0;
    var handler = setInterval(function () {
        if (i <= paintArray.length) {
            if (i == paintArray.length) {
                paintArray[i - 1].classList.remove('mark');
                return;
            }
            paintArray[i].classList.add('mark');
            //处理innerText
            var index = paintArray[i].innerText.indexOf('\n');
            if (index != -1 && paintArray[i].innerText.substr(0, index) == input) {
                paintArray[i].classList.add('got');
            } else if (index == -1 && paintArray[i].innerText == input) {
                paintArray[i].classList.add('got');
            }
            if (i > 0) {
                paintArray[i - 1].classList.remove('mark');
            }
            i++;
        }
    }, 500);
}

function paintPreOrder(target) {
    paintArray.push(target);
    for (var i = 0; i < target.children.length; i++) {
        paintPreOrder(target.children[i]);
    }
}

function preOrder() {
    var input = document.getElementById('search').value;
    var target = document.getElementsByClassName('layer-1');
    paintPreOrder(target[0]);
    console.log(paintArray);
    search(paintArray, input);
    paintArray = [];
}

function init() {
    document.getElementById('preOrder').addEventListener('click', preOrder, false);
}