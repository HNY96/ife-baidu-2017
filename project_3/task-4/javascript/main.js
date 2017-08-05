'use strict';

window.onload = init;
var x = null;
var y = null;
var direction = null;
var playground = null;

function init() {
    document.getElementById('start').addEventListener('click', start, false);
    document.getElementById('go').addEventListener('click', go, false);
}

function start() {
    //清除上一次的痕迹
    if (x) {
        playground[x].children[y].classList.remove('north');
        playground[x].children[y].classList.remove('east');
        playground[x].children[y].classList.remove('south');
        playground[x].children[y].classList.remove('west');
        x = null;
        y = null;
        direction = null;
    }
    x = Math.round(Math.random() * 9 + 1);
    y = Math.round(Math.random() * 9 + 1);
    direction = Math.round(Math.random() * 3 + 1);
    //这是11个tr标签序列
    playground = document.getElementById('playground').children[0].children;
    console.log(x);
    console.log(y);
    console.log(direction);
    switch (direction) {
        case 1:
            playground[x].children[y].classList.add('north');
            break;
        case 2:
            playground[x].children[y].classList.add('east');
            break;
        case 3:
            playground[x].children[y].classList.add('south');
            break;
        case 4:
            playground[x].children[y].classList.add('west');
            break;
    }
    console.log(playground[x].children[y]);
}

function go() {
    var command = document.getElementById('command').value;
    switch (command) {
        case 'GO':
            switch (direction) {
                case 1:
                    if (x == 1) {
                        alert('you reached the north border');
                    } else {
                        playground[x].children[y].classList.remove('north');
                        x -= 1;
                        playground[x].children[y].classList.add('north');
                    }
                    break;
                case 2:
                    if (y == 11) {
                        alert('you reached the east border');
                    } else {
                        playground[x].children[y].classList.remove('east');
                        y += 1;
                        playground[x].children[y].classList.add('east');
                    }
                    break;
                case 3:
                    if (x == 11) {
                        alert('you reached the south border');
                    } else {
                        playground[x].children[y].classList.remove('south');
                        x += 1;
                        playground[x].children[y].classList.add('south');
                    }
                    break;
                case 4:
                    if (y == 1) {
                        alert('you reached the west border');
                    } else {
                        playground[x].children[y].classList.remove('west');
                        y -= 1;
                        playground[x].children[y].classList.add('west');
                    }
                    break;
            }
            break;
        case 'TUN LEF':
            switch (direction) {
                case 1:
                    playground[x].children[y].classList.remove('north');
                    playground[x].children[y].classList.add('west');
                    direction = 4;
                    break;
                case 2:
                    playground[x].children[y].classList.remove('east');
                    playground[x].children[y].classList.add('north');
                    direction = 1;
                    break;
                case 3:
                    playground[x].children[y].classList.remove('south');
                    playground[x].children[y].classList.add('east');
                    direction = 2;
                    break;
                case 4:
                    playground[x].children[y].classList.remove('west');
                    playground[x].children[y].classList.add('south');
                    direction = 3;
                    break;
            }
            break;
        case 'TUN RIG':
            switch (direction) {
                case 1:
                    playground[x].children[y].classList.remove('north');
                    playground[x].children[y].classList.add('east');
                    direction = 2;
                    break;
                case 2:
                    playground[x].children[y].classList.remove('east');
                    playground[x].children[y].classList.add('south');
                    direction = 3;
                    break;
                case 3:
                    playground[x].children[y].classList.remove('south');
                    playground[x].children[y].classList.add('west');
                    direction = 4;
                    break;
                case 4:
                    playground[x].children[y].classList.remove('west');
                    playground[x].children[y].classList.add('north');
                    direction = 1;
                    break;
            }
            break;
        case 'TUN BAC':
            switch (direction) {
                case 1:
                    playground[x].children[y].classList.remove('north');
                    playground[x].children[y].classList.add('south');
                    direction = 3;
                    break;
                case 2:
                    playground[x].children[y].classList.remove('east');
                    playground[x].children[y].classList.add('west');
                    direction = 4;
                    break;
                case 3:
                    playground[x].children[y].classList.remove('south');
                    playground[x].children[y].classList.add('north');
                    direction = 1;
                    break;
                case 4:
                    playground[x].children[y].classList.remove('west');
                    playground[x].children[y].classList.add('east');
                    direction = 2;
                    break;
            }
            break;
    }
    document.getElementById('command').value = '';
    document.getElementById('command').focus();

}