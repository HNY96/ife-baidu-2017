'use strict';

window.onload = init;
var x = null;
var y = null;
var direction = null;
var playground = null;
var temp = null;

function init() {
    initPlayer();
    document.getElementById('start').addEventListener('click', start, false);
    document.getElementById('go').addEventListener('click', go, false);
}

function initPlayer() {
    temp = document.createElement('div');
    temp.style.height = '40px';
    temp.style.width = '40px';
    var head = document.createElement('div');
    head.style.height = '10px';
    head.style.width = '40px';
    head.style.backgroundColor = 'blue';
    temp.appendChild(head);
    var body = document.createElement('div');
    body.style.height = '30px';
    body.style.width = '40px';
    body.style.backgroundColor = 'red';
    temp.appendChild(body);
    temp.style.transition = 'all 1s';
    console.log(temp);
}

function start() {
    //清除上一次的痕迹
    if (x) {
        temp.style.transform = '';
    }
    x = Math.round(Math.random() * 9 + 1);
    y = Math.round(Math.random() * 9 + 1);
    direction = Math.round(Math.random() * 3 + 1);
    //这是11个tr标签序列
    console.log(x);
    console.log(y);
    console.log(direction);
    document.getElementById('playground').appendChild(temp);
    temp.style.position = 'absolute';
    temp.style.left = String(18 + 41 * (x - 1)) + 'px';
    temp.style.top = String(23 + 41 * (y - 1)) + 'px';
    switch (direction) {
        case 1:
            temp.style.transform = 'rotate(0deg)';
            break;
        case 2:
            temp.style.transform = 'rotate(90deg)';
            break;
        case 3:
            temp.style.transform = 'rotate(180deg)';
            break;
        case 4:
            temp.style.transform = 'rotate(270deg)';
            break;
    }
}

function go() {
    var command = document.getElementById('command').value;
    switch (command) {
        case 'GO':
            move(direction);
            break;
        case 'TUN LEF':
            //逆时针转90度
            rotate(1);
            //转动完毕，调整结束时方向
            switch (direction) {
                case 1:
                    direction = 4;
                    break;
                case 2:
                    direction = 1;
                    break;
                case 3:
                    direction = 2;
                    break;
                case 4:
                    direction = 3;
                    break;
            }
            break;
        case 'TUN RIG':
            //顺时针转90度
            rotate(2);
            //转动完毕，调整结束时方向
            switch (direction) {
                case 1:
                    direction = 2;
                    break;
                case 2:
                    direction = 3;
                    break;
                case 3:
                    direction = 4;
                    break;
                case 4:
                    direction = 1;
                    break;
            }
            break;
        case 'TUN BAC':
            rotate(3);
            //转动完毕，调整结束时方向
            switch (direction) {
                case 1:
                    direction = 3;
                    break;
                case 2:
                    direction = 4;
                    break;
                case 3:
                    direction = 1;
                    break;
                case 4:
                    direction = 2;
                    break;
            }
            break;
        case 'TRA LEF':
            move(4);
            break;
        case 'TRA TOP':
            move(1);
            break;
        case 'TRA RIG':
            move(2);
            break;
        case 'TRA BOT':
            move(3);
            break;
        case 'MOV LEF':
            switch (direction) {
                case 1:
                    rotate(1);
                    break;
                case 2:
                    rotate(3);
                    break;
                case 3:
                    rotate(2);
                    break;
                case 4:
                    break;
            }
            setTimeout('move(4);', 1000);
            direction = 4;
            break;
        case 'MOV TOP':
            switch (direction) {
                case 1:
                    break;
                case 2:
                    rotate(1);
                    break;
                case 3:
                    rotate(3);
                    break;
                case 4:
                rotate(2);
                    break;
            }
            setTimeout('move(1);', 1000);
            direction = 1;
            break;
        case 'MOV RIG':
            switch (direction) {
                case 1:
                    rotate(2);
                    break;
                case 2:
                    break;
                case 3:
                    rotate(1);
                    break;
                case 4:
                    rotate(3);
                    break;
            }
            setTimeout('move(2);', 1000);
            direction = 2;
            break;
        case 'MOV BOT':
            switch (direction) {
                case 1:
                    rotate(3);
                    break;
                case 2:
                    rotate(2);
                    break;
                case 3:
                    break;
                case 4:
                    rotate(1);
                    break;
            }
            setTimeout('move(3);', 1000);
            direction = 3;
            break;
    }
    document.getElementById('command').value = '';
    document.getElementById('command').focus();
    console.log('x: ' + x);
    console.log('y: ' + y);
    console.log(direction);
}

function rotate(flag) {
    //调整角度
    var left = temp.style.transform.indexOf('(');
    var right = temp.style.transform.indexOf('d');
    var deg = temp.style.transform.substr(left + 1, right - left - 1);
    console.log(deg);
    switch (flag) {
        //逆时针90度
        case 1:
            deg = Number(deg) - 90;
            break;
            //顺时针90度
        case 2:
            deg = Number(deg) + 90;
            break;
            //顺时针180度
        case 3:
            deg = Number(deg) + 180;
            break;
    }
    var rotateDeg = 'rotate(' + deg + 'deg)';
    console.log(rotateDeg);
    //开始移动
    temp.style.transform = rotateDeg;
}

function move(flag) {
    var position = temp.style.left.indexOf('p');
    var left = Number(temp.style.left.substr(0, position));
    position = temp.style.top.indexOf('p');
    var top = Number(temp.style.top.substr(0, position));
    switch (flag) {
        //向北移动
        case 1:
            if (y == 1) {
                alert('you reached the north border');
            } else {
                top -= 41;
                y -= 1;
            }
            break;
        case 2:
            if (x == 10) {
                alert('you reached the east border');
            } else {
                left += 41;
                x += 1;
            }
            break;
        case 3:
            if (y == 10) {
                alert('you reached the south border');
            } else {
                top += 41;
                y += 1;
            }
            break;
        case 4:
            if (x == 1) {
                alert('you reached the west border');
            } else {
                left -= 41;
                x -= 1;
            }
            break;
    }
    temp.style.left = left + 'px';
    temp.style.top = top + 'px';
}