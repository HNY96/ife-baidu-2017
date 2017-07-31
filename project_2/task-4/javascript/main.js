'use strict'

var showBox = [];

function deleteAll() {
    var area = document.getElementById('showArea');
    var tempLength = area.children.length;
    for (var i = 0; i < tempLength; i++) {
        area.removeChild(area.children[0]);
    }
}

function show() {
    deleteAll();
    var area = document.getElementById('showArea');
    for (var i = 0; i < showBox.length; i++) {
        var temp = document.createElement('div');
        temp.innerText = showBox[i];
        temp.style.width = '70px';
        temp.style.height = '70px';
        temp.style.backgroundColor = 'red';
        temp.style.color = 'white';
        temp.style.margin = '5px';
        temp.style.display = 'flex';
        temp.style.justifyContent = 'center';
        temp.style.alignItems = 'center';
        area.appendChild(temp);
    }
}

function enterLeft() {
    var number = document.getElementById('inputNumber').value;
    console.log(number);
    document.getElementById('inputNumber').value = '';
    showBox.unshift(number);
    console.log(showBox);
    show();
}

function enterRight() {
    var number = document.getElementById('inputNumber').value;
    console.log(number);
    document.getElementById('inputNumber').value = '';
    showBox.push(number);
    console.log(showBox);
    show();
}

function exitLeft() {
    var outNumber = showBox.shift();
    console.log(showBox);
    show();
    alert(outNumber);
}

function exitRight() {
    var outNumber = showBox.pop();
    console.log(showBox);
    show();
    alert(outNumber);
}

function init() {
    document.getElementById('enterLeft').onclick = enterLeft;
    document.getElementById('enterRight').onclick = enterRight;
    document.getElementById('exitLeft').onclick = exitLeft;
    document.getElementById('exitRight').onclick = exitRight;

}

init();