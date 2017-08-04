'use strict'

window.onload = init;

function verify() {
    var inputName = document.getElementById('name').value;
    var reg = /[\x00-\xff\u4e00-\u9fff]/g;
    var temp = null;
    var regEn = /[\x00-\xff]/;
    var regCh = /[\u4e00-\u9fff]/;
    var length = 0;
    var flag = 0;   //轮数，判断是否有非法字符
    while (temp = reg.exec(inputName)) {
        console.log(temp[0]);
        if (regEn.test(temp[0])) {
            length += 1;
        } else if (regCh.test(temp[0])) {
            length += 2;
        }
        flag += 1;
    }
    if (flag != inputName.length) {
        alert('请勿输入非法字符');
        return;
    }
    if (length < 4 || length > 16) {
        fail();
    } else {
        pass();
    }
}

function fail() {
    document.getElementById('name').style.border = '1px solid #d22';
    document.getElementById('note').style.color = '#d22';
    document.getElementById('note').innerText = '长度需为4~16个字符';
    // document.getElementById('name').focus();
    document.getElementById('name').innerText = '';
}

function pass() {
    document.getElementById('name').style.border = '1px solid #78b957';
    document.getElementById('note').style.color = '#78b957';
    document.getElementById('note').innerText = '名称格式正确';
    // document.getElementById('name').focus();
    document.getElementById('name').innerText = '';
}

function init() {
    document.getElementById('inputButton').addEventListener('click', verify, false);
}