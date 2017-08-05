'use strict';

window.onload = init;

function init() {
    document.getElementById('notStudent').addEventListener('click', notStudent, false);
    document.getElementById('student').addEventListener('click', student, false);
}

function notStudent() {
    console.log('Not a student');
    document.getElementById('displayStudent').style.display = 'none';
    document.getElementById('displayNotStudent').style.display = 'block';
}

function student() {
    console.log('A student');
    document.getElementById('displayStudent').style.display = 'block';
    document.getElementById('displayNotStudent').style.display = 'none';
}

function changeList() {
    switch (document.getElementById('university').selectedIndex) {
        case 0:
            document.getElementById('beijingUni').style.display = 'inline';
            document.getElementById('shanghaiUni').style.display = 'none';
            document.getElementById('shanxiUni').style.display = 'none';
            break;
        case 1:
            document.getElementById('beijingUni').style.display = 'none';
            document.getElementById('shanghaiUni').style.display = 'inline';
            document.getElementById('shanxiUni').style.display = 'none';
            break;
        case 2:
            document.getElementById('beijingUni').style.display = 'none';
            document.getElementById('shanghaiUni').style.display = 'none';
            document.getElementById('shanxiUni').style.display = 'inline';
            break;

    }
}