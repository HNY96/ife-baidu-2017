'use strict'

function judgeLength() {
    var area = document.getElementById('showArea');
    var nowLength = area.children.length;
    console.log(nowLength);
    if (nowLength < 60) {
        return true;
    } else {
        return false;
    }
}

function enterLeft(input) {
    console.log(input);
    if (judgeLength()) {
        //创建一个新的dom节点，放到showArea最前面
        var area = document.getElementById('showArea');
        var temp = document.createElement('div');
        temp.className = 'showingNumber';
        temp.innerText = input;
        area.insertBefore(temp, area.children[0]);
        document.getElementById('inputNumber').focus();
    } else {
        alert('当前队列的元素个数大于60个，无法插入新的元素')
    }
}

function enterRight(input) {
    console.log(input);
    if (judgeLength()) {
        //创建一个新的dom节点，放到showArea最后面
        var area = document.getElementById('showArea');
        var temp = document.createElement('div');
        temp.className = 'showingNumber';
        temp.innerText = input;
        area.appendChild(temp);
        document.getElementById('inputNumber').focus();
    } else {
        alert('当前队列的元素个数大于60个，无法插入新的元素')
    }
}

function exitLeft() {
    //删掉showArea下面的第一个dom元素
    var area = document.getElementById('showArea');
    var outNumber = area.children[0].innerText;
    area.removeChild(area.children[0]);
    alert('从数列左侧弹出的文本是：' + outNumber);
}

function exitRight() {
    //删掉showArea下面的最后一个dom元素
    var area = document.getElementById('showArea');
    var tempLength = area.children.length;
    var outNumber = area.children[tempLength - 1].innerText;
    area.removeChild(area.children[tempLength - 1]);
    alert('从数列右侧弹出的文本是：' + outNumber);
}

function deleteOne() {
    console.log(event);
    var area = document.getElementById('showArea');
    var outNumber = event.target.innerText;
    area.removeChild(event.target);
    alert('通过点击弹出的文本是：' + outNumber);
}

function inputLeft() {
    var input = document.getElementById('inputNumber').value;
    document.getElementById('inputNumber').value = '';
    var tempArray = [];
    var reg = /([\w\u4E00-\u9FA5]+)/g;
    while (true) {
        var result = reg.exec(input);
        if (result !== null) {
            tempArray.push(result);
        } else {
            break;
        }
    }
    for (var i = tempArray.length-1; i >= 0; i--) {
        enterLeft(tempArray[i][0]);
    }
}

function inputRight() {
    var input = document.getElementById('inputNumber').value;
    document.getElementById('inputNumber').value = '';
    var tempArray = [];
    var reg = /([\w\u4E00-\u9FA5]+)/g;
    while (true) {
        var result = reg.exec(input);
        if (result !== null) {
            tempArray.push(result);
        } else {
            break;
        }
    }
    for (var i = 0; i < tempArray.length; i++) {
        enterRight(tempArray[i][0]);
    }
}

function search() {
    var input = String(document.getElementById('searchInput').value);
    document.getElementById('searchInput').value = '';
    var list = document.getElementById('showArea').children;
    for (var i = 0; i < list.length; i++) {
        if (String(list[i].innerText).indexOf(input) !== -1) {
            list[i].style.backgroundColor = 'yellow';
            list[i].style.color = 'black';
        }
    }
}

function init() {
    document.getElementById('enterLeft').addEventListener('click', inputLeft, false);
    document.getElementById('enterRight').addEventListener('click', inputRight, false);
    document.getElementById('exitLeft').addEventListener('click', exitLeft, false);
    document.getElementById('exitRight').addEventListener('click', exitRight, false);
    document.getElementById('showArea').addEventListener('click', deleteOne, false);
    document.getElementById('search').addEventListener('click', search, false);
}

window.onload = init;