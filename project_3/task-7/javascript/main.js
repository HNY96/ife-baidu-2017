'use strict';

window.onload = init;

function init() {
    document.getElementById('name').focus();
    document.getElementById('insert').addEventListener('click', insert, false);
    document.getElementById('validConfirm').addEventListener('click', validConfirm, false);
    document.getElementById('sortConfirm').addEventListener('click', sortMy, false);
}

function insert() {
    var name = document.getElementById('name').value;
    var chinese = document.getElementById('chinese').value;
    var math = document.getElementById('math').value;
    var english = document.getElementById('english').value;
    var judgeResult = judge(name, chinese, math, english);
    if (!judgeResult) {
        alert('Cannot insert your inputs to the table');
        clearInput();
        return;
    }
    console.log(name + ' ' + chinese + ' ' + math + ' ' + english);
    //创造tr,td
    var tr = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.innerText = name;
    tr.appendChild(tdName);
    var tdCh = document.createElement('td');
    tdCh.innerText = chinese;
    tr.appendChild(tdCh);
    var tdMa = document.createElement('td');
    tdMa.innerText = math;
    tr.appendChild(tdMa);
    var tdEn = document.createElement('td');
    tdEn.innerText = english;
    tr.appendChild(tdEn);
    console.log(tr);
    var total = Number(chinese) + Number(math) + Number(english);
    var tdTo = document.createElement('td');
    tdTo.innerText = total;
    tr.appendChild(tdTo);
    document.getElementsByTagName('tbody')[0].appendChild(tr);
    clearInput();
}

function judge(name, chinese, math, english) {
    var regName = /^[a-zA-Z]+$/g;
    console.log(chinese);
    if (!regName.test(name)) {
        alert('The name cannot contain special character except for English letters');
        return false;
    }
    if (Number(chinese) < 0 || Number(chinese) > 100 || chinese === '') {
        alert('Your Chinese score is invalid');
        return false;
    }
    if (Number(math) < 0 || Number(math) > 100 || math === '') {
        alert('Your Math score is invalid');
        return false;
    }
    if (Number(english) < 0 || Number(english) > 100 || english === '') {
        alert('Your English score is invalid');
        return false;
    }
    return true;
}

function clearInput() {
    document.getElementById('name').value = '';
    document.getElementById('chinese').value = '';
    document.getElementById('math').value = '';
    document.getElementById('english').value = '';
    document.getElementById('name').focus();
}

function validConfirm() {
    var nameValid = document.getElementById('nameValid').checked;
    var chValid = document.getElementById('chValid').checked;
    var maValid = document.getElementById('maValid').checked;
    var enValid = document.getElementById('enValid').checked;
    var toValid = document.getElementById('toValid').checked;
    var selectArea = document.getElementById('canSort');
    if (nameValid) {
        var tempName = document.createElement('option');
        tempName.innerText = 'Name';
        tempName.value = 'name';
        selectArea.appendChild(tempName);
    }
    if (chValid) {
        var tempCh = document.createElement('option');
        tempCh.innerText = 'Chinese';
        tempCh.value = 'chinese';
        selectArea.appendChild(tempCh);
    }
    if (maValid) {
        var tempMa = document.createElement('option');
        tempMa.innerText = 'Math';
        tempMa.value = 'math';
        selectArea.appendChild(tempMa);
    }
    if (enValid) {
        var tempEn = document.createElement('option');
        tempEn.innerText = 'English';
        tempEn.value = 'english';
        selectArea.appendChild(tempEn);
    }
    if (toValid) {
        var tempTo = document.createElement('option');
        tempTo.innerText = 'Total';
        tempTo.value = 'total';
        selectArea.appendChild(tempTo);
    }
}

function sortMy() {
    var sortObj = document.getElementById('canSort').value;
    var direction = document.getElementById('az').checked;
    //把table添加到队列中
    var tableList = document.getElementsByTagName('table')[0].children[0].children;
    var sortArray = [];
    for (var i = 1; i < tableList.length; i++) {
        sortArray[i - 1] = tableList[i];
    }
    switch (sortObj) {
        case 'name':
            sortArray.sort(function (a, b) {
                if (direction) {
                    return a.children[0].innerText.charCodeAt(0) - b.children[0].innerText.charCodeAt(0);
                } else {
                    return b.children[0].innerText.charCodeAt(0) - a.children[0].innerText.charCodeAt(0);
                }
            });
            break;
        case 'chinese':
            sortArray.sort(function (a, b) {
                if (direction) {
                    return Number(a.children[1].innerText) - Number(b.children[1].innerText);
                } else {
                    return Number(b.children[1].innerText) - Number(a.children[1].innerText);
                }
            });
            break;
        case 'math':
            sortArray.sort(function (a, b) {
                if (direction) {
                    return Number(a.children[2].innerText) - Number(b.children[2].innerText);
                } else {
                    return Number(b.children[2].innerText) - Number(a.children[2].innerText);
                }
            });
            break;
        case 'english':
            sortArray.sort(function (a, b) {
                if (direction) {
                    return Number(a.children[3].innerText) - Number(b.children[3].innerText);
                } else {
                    return Number(b.children[3].innerText) - Number(a.children[3].innerText);
                }
            });
            break;
        case 'total':
            sortArray.sort(function (a, b) {
                if (direction) {
                    return Number(a.children[4].innerText) - Number(b.children[4].innerText);
                } else {
                    return Number(b.children[4].innerText) - Number(a.children[4].innerText);
                }
            });
            break;
    }
    console.log(sortArray);
    //把队列换回dom里去
    for (var i = 0; i < sortArray.length; i++) {
        document.getElementsByTagName('tbody')[0].removeChild(document.getElementsByTagName('tbody')[0].children[1]);
    }
    for (var i = 0; i < sortArray.length; i++) {
        document.getElementsByTagName('tbody')[0].appendChild(sortArray[i]);
    }
}