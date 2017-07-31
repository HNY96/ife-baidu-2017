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

function changeHeight(element) {
    var number = element.innerText;
    var height = Number(number) + 10;
    var heightStr = height + 'px';
    element.style.height = heightStr;
}

function enterLeft() {
    //拿到数字
    var number = document.getElementById('inputNumber').value;
    console.log(number);
    if (number >= 10 && number <= 100) {
        //输入框清空，以便下一次输入
        document.getElementById('inputNumber').value = '';
        if (judgeLength()) {
            //创建一个新的dom节点，放到showArea最前面
            var area = document.getElementById('showArea');
            var temp = document.createElement('div');
            temp.className = 'showingNumber';
            temp.innerText = number;
            //根据包含的值改一下高度
            changeHeight(temp);
            area.insertBefore(temp, area.children[0]);
            document.getElementById('inputNumber').focus();
        } else {
            alert('当前队列的元素个数大于60个，无法插入新的元素')
        }
    } else {
        alert('请输入10-100之间的数字')
        document.getElementById('inputNumber').value = '';
        document.getElementById('inputNumber').focus();
    }
}

function enterRight() {
    //拿到数字
    var number = document.getElementById('inputNumber').value;
    console.log(number);
    if (number >= 10 && number <= 100) {
        //输入框清空，以便下一次输入
        document.getElementById('inputNumber').value = '';
        if (judgeLength()) {
            //创建一个新的dom节点，放到showArea最后面
            var area = document.getElementById('showArea');
            var temp = document.createElement('div');
            temp.className = 'showingNumber';
            temp.innerText = number;
            //根据包含的值改一下高度
            changeHeight(temp);
            area.appendChild(temp);
            document.getElementById('inputNumber').focus();
        } else {
            alert('当前队列的元素个数大于60个，无法插入新的元素')
        }
    } else {
        alert('请输入10-100之间的数字')
        document.getElementById('inputNumber').value = '';
        document.getElementById('inputNumber').focus();
    }
}

function exitLeft() {
    //删掉showArea下面的第一个dom元素
    var area = document.getElementById('showArea');
    var outNumber = area.children[0].innerText;
    area.removeChild(area.children[0]);
    alert('从数列左侧弹出的数字是：' + outNumber);
}

function exitRight() {
    //删掉showArea下面的最后一个dom元素
    var area = document.getElementById('showArea');
    var tempLength = area.children.length;
    var outNumber = area.children[tempLength - 1].innerText;
    area.removeChild(area.children[tempLength - 1]);
    alert('从数列右侧弹出的数字是：' + outNumber);
}

function deleteOne() {
    console.log(event);
    var area = document.getElementById('showArea');
    var outNumber = event.target.innerText;
    area.removeChild(event.target);
    alert('通过点击弹出的数字是：' + outNumber);
}

function bubbleSort() {
    var area = document.getElementById('showArea');
    var list = document.getElementById('showArea').children;
    var listLength = list.length;
    for (var j = 0; j < listLength - 1; j++) {
        for (var i = 0; i < listLength - 1 - j; i++) {
            list[i].style.backgroundColor = 'yellow';
            list[i].style.color = 'black';
            list[i + 1].style.backgroundColor = 'yellow';
            list[i + 1].style.color = 'black';
            //todo 加间隔
            if (Number(list[i].innerText) > Number(list[i + 1].innerText)) {
                var temp1 = list[i];
                var temp2 = list[i + 1];
                area.insertBefore(temp2, list[i]);
                //todo 加间隔
            }
            list[i].style = '';
            list[i + 1].style = '';
            changeHeight(list[i]);
            changeHeight(list[i + 1]);
        }
    }
}

function randomInput() {
    //清除当前的所有元素
    var area = document.getElementById('showArea');
    var tempLength = area.children.length;
    if (tempLength > 0) {
        for (var i = 0; i < tempLength; i++) {
            area.removeChild(area.children[0]);
        }
    }
    for (var i = 0; i < 20; i++) {
        var number = Math.round(Math.random() * 90 + 10);
        document.getElementById('inputNumber').value = number;
        var temp = document.getElementById('enterRight');
        temp.click();
    }
}

function init() {
    document.getElementById('enterLeft').addEventListener('click', enterLeft, false);
    document.getElementById('enterRight').addEventListener('click', enterRight, false);
    document.getElementById('exitLeft').addEventListener('click', exitLeft, false);
    document.getElementById('exitRight').addEventListener('click', exitRight, false);
    document.getElementById('showArea').addEventListener('click', deleteOne, false);
    document.getElementById('sortAll').addEventListener('click', bubbleSort, false);
    document.getElementById('randomInput').addEventListener('click', randomInput, false);
}

window.onload = init;