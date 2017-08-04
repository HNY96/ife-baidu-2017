'use strict'

window.onload = init;
var previousTarget = null;
var verifyArray = [false, false, false, false, false]; //五项验证成功与否

function fail() {
    previousTarget.style.border = '1px solid #d22';
    previousTarget.parentElement.children[1].style.color = '#d22';
    previousTarget.parentElement.children[1].innerText = '请按要求填写';
}

function pass() {
    previousTarget.style.border = '1px solid #78b957';
    previousTarget.parentElement.children[1].style.color = '#78b957';
    previousTarget.parentElement.children[1].innerText = '格式正确';
}

function verifyName(name) {
    var temp = null;
    var reg = /[\x00-\xff\u4e00-\u9fff]/g;
    var regEn = /[\x00-\xff]/;
    var regCh = /[\u4e00-\u9fff]/;
    var length = 0;
    var flag = 0; //轮数，判断是否有非法字符
    while (temp = reg.exec(name)) {
        console.log(temp[0]);
        if (regEn.test(temp[0])) {
            length += 1;
        } else if (regCh.test(temp[0])) {
            length += 2;
        }
        flag += 1;
    }
    if (flag != name.length || length < 4 || length > 16) {
        fail();
    } else {
        pass();
        verifyArray[0] = true;
    }
}

function verifyPass(password) {
    var passLength = password.length;
    if (passLength < 8 || passLength > 20) {
        fail();
    }
    var reg = /[0-9a-zA-Z]/,
        regNum = /[0-9]/,
        regLower = /[a-z]/,
        regUpper = /[A-Z]/;
    var flagArray = [0, 0, 0]; //用来记录数字，小写，大写的个数
    for (var i = 0; i < passLength && reg.test(password[i]); i++) {
        if (regNum.test(password[i])) {
            flagArray[0]++;
        } else if (regLower.test(password[i])) {
            flagArray[1]++;
        } else if (regUpper.test(password[i])) {
            flagArray[2]++;
        }
    }
    if (i == passLength && flagArray[0] > 0 && flagArray[1] > 0 && flagArray[2] > 0) {
        pass();
        verifyArray[1] = true;
    } else {
        fail();
    }
}

function verifyVefify(verify) {
    var password = document.getElementById('inputPass').value;
    if (password != verify || verify == '') {
        fail();
    } else {
        pass();
        verifyArray[2] = true;
    }
}

function verifyEmail(email) {
    var reg = /^[\w\.\_]+@[\w]+\.[a-z]+$/;
    if (reg.test(email)) {
        pass();
        verifyArray[3] = true;
    } else {
        fail();
    }
}

function verifyPhone(phone) {
    var reg = /[0-9]{11}/;
    if (reg.test(phone)) {
        pass();
        verifyArray[4] = true;
    } else {
        fail();
    }
}

function verify() {
    switch (previousTarget.id) {
        case 'inputName':
            verifyName(document.getElementById('inputName').value);
            break;
        case 'inputPass':
            verifyPass(document.getElementById('inputPass').value);
            break;
        case 'inputVerify':
            verifyVefify(document.getElementById('inputVerify').value);
            break;
        case 'inputEmail':
            verifyEmail(document.getElementById('inputEmail').value);
            break;
        case 'inputPhone':
            verifyPhone(document.getElementById('inputPhone').value);
            break;
    }
}

function focusShow() {
    if (previousTarget) {
        verify();
    }
    console.log(event.target);
    event.target.parentElement.children[1].style.visibility = 'visible';
    previousTarget = event.target;
}

function verifyAll() {
    var flag = true;
    for (var i = 0; i < 5; i++) {
        flag &= verifyArray[i];
    }
    if (flag) {
        alert('提交成功');
    } else {
        alert('输入有误，请检查');
    }
}

function init() {
    // document.getElementById('inputName').addEventListener('focus', focusShow, false);
    // document.getElementById('inputPass').addEventListener('focus', focusShow, false);
    // document.getElementById('inputVerify').addEventListener('focus', focusShow, false);
    // document.getElementById('inputEmail').addEventListener('focus', focusShow, false);
    // document.getElementById('inputPhone').addEventListener('focus', focusShow, false);
    document.getElementById('area').addEventListener('click', focusShow, false);
    document.getElementById('submit').addEventListener('click', verifyAll, false);
}