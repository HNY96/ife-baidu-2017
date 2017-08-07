'use strict';

window.onload = init;

function init() {
    document.getElementById('start').addEventListener('click', pop, false);
}

function pop() {
    //灰色背景层
    var background = document.createElement('div');
    background.style.backgroundColor = '#444';
    background.style.opacity = '0.5';
    background.style.zIndex = '1';
    background.style.width = '100vw';
    background.style.height = '100vh';
    background.style.position = 'fixed';
    background.style.top = '0';
    background.style.left = '0';
    document.getElementById('area').appendChild(background);
    //白色弹出框
    var box = document.createElement('div');
    box.style.backgroundColor = 'white';
    var boxWidth = 500;
    var boxHeight = 350;
    console.log(window.innerWidth);
    box.style.zIndex = '2';
    box.style.width = boxWidth + 'px';
    box.style.height = boxHeight + 'px';
    box.style.position = 'fixed';
    box.style.top = (window.innerHeight - boxHeight) / 2 + 'px';
    box.style.left = (window.innerWidth - boxWidth) / 2 + 'px';
    document.getElementById('area').appendChild(box);
    //弹出框的顶部栏
    var header = document.createElement('div');
    header.style.backgroundColor = '#444';
    header.style.height = '30px';
    header.style.width = boxWidth - 22 + 'px';
    header.style.border = '1px solid black';
    header.style.padding = '10px'
    var headerContent = document.createElement('p');
    headerContent.innerText = 'Here is the pop up box';
    headerContent.style.color = 'white';
    headerContent.style.margin = 'auto 0';
    //弹出框的主体文字
    var boxBodyContent = document.createElement('p');
    boxBodyContent.style.color = '#444';
    boxBodyContent.style.margin = '30px 10px';
    boxBodyContent.innerText = 'Here is the pop up box';
    //弹出框的两个按钮
    var boxButton = document.createElement('input');
    boxButton.type = 'button';
    boxButton.style.webkitAppearance = 'none';
    boxButton.style.width = '70px';
    boxButton.style.height = '30px';
    boxButton.style.backgroundColor = '#444';
    boxButton.style.border = '1px solid black';
    boxButton.value = 'Confirm';
    boxButton.style.color = 'white';
    boxButton.style.margin = '150px 0 0 300px';
    boxButton.id = 'confirm';
    var boxButton2 = document.createElement('input');
    boxButton2.type = 'button';
    boxButton2.style.webkitAppearance = 'none';
    boxButton2.style.width = '70px';
    boxButton2.style.height = '30px';
    boxButton2.style.backgroundColor = '#444';
    boxButton2.style.border = '1px solid black';
    boxButton2.value = 'Cancel';
    boxButton2.style.color = 'white';
    boxButton2.style.margin = '150px 0 0 20px';
    boxButton2.id = 'cancel';

    box.appendChild(header);
    header.appendChild(headerContent);
    box.appendChild(boxBodyContent);
    box.appendChild(boxButton);
    box.appendChild(boxButton2);

    document.getElementById('confirm').addEventListener('click', removeAll, false);
    document.getElementById('cancel').addEventListener('click', removeAll, false);
}

function removeAll() {
    var area = document.getElementById('area');
    area.removeChild(area.children[1]);
    area.removeChild(area.children[1]);
}