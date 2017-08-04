'use strict'

window.onload = init;
var paintArray = [];
var previousTarget = null;

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

function changeColor() {
    console.log(event.target.classList);
    if (previousTarget) {
        previousTarget.classList.remove('clicked');
    }
    event.target.classList.add('clicked');
    previousTarget = event.target;
}

function deleteOne() {
    console.log(previousTarget);
    previousTarget.parentElement.removeChild(previousTarget);
}

function insert() {
    var input = document.getElementById('inputText').value;
    var temp = document.createElement('div');
    temp.innerText = input;
    switch(previousTarget.classList[0]) {
        case 'layer-1':
            temp.classList.add('layer-2');
            break;
        case 'layer-2':
            temp.classList.add('layer-3');
            break;
        case 'layer-3':
            temp.classList.add('layer-4');
            break;
        case 'layer-4':
            temp.classList.add('layer-5');
            break;
        case 'layer-5':
            temp.classList.add('layer-6');
            break;
    }
    previousTarget.appendChild(temp);
}

function init() {
    document.getElementById('preOrder').addEventListener('click', preOrder, false);
    document.getElementById('flex-container').addEventListener('click', changeColor, false);
    document.getElementById('delete').addEventListener('click', deleteOne, false);
    document.getElementById('inputButton').addEventListener('click', insert, false);
}