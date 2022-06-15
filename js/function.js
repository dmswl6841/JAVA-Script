//function.js

function sum(number1, number2) {
    let result = number1 + number2;
    console.log(result);
    return result;
}
sum(10, 20);
document.write(sum(10, 20));

function makeTd(val) {
    return '<td>' + val + '</td>';
}

function mkTr(val) {
    return '<tr>' + val + '</tr>';
}

let values = ['김', '이', '박', '최'];

let str = '<table border=1>'

for (let val of values) {
    let td = makeTd(val);
    str += mkTr(td)
}
str += '</table>'

document.write(str);

function getFirstDay(mon) {
    switch (mon) {
        case 1:
            return 7;
        case 2:
            return 3;
        case 3:
            return 2;
        case 4:
            return 4;
        case 5:
            return 1;
        case 6:
            return 4;
        case 7:
            return 6;
        case 8:
            return 2;
        case 9:
            return 5;
        case 10:
            return 7;
        case 11:
            return 3;
        case 12:
            return 5;
        default:
            0;
    }
}
console.log(getFirstDay(1));


function getLastDate(mon) {
    if (mon > 12 || mon < 1) {
        return 'error';
    } else if (mon == 2) {
        return 28;
    } else if ((mon % 2 == 0 && mon >= 8) || (mon % 2 == 1 && mon <= 7))
        return 31;
    else {
        return 30;
    }
}


//달력
let mon = 8;
showCalender(mon);

function showCalender(mon) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = '<table border=1><caption>'+mon+'월 달력</caption><tr>'
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>'
    let vtd = getFirstDay(mon);
    for (let i = 1; i < vtd; i++) {
        str += '</td><td>'
    }
    for (let i = 1; i <= getLastDate(mon); i++) {
        str += '<td>' + i + '</td>'
        if ((vtd - 1 + i) % 7 == 0) {
            str += '</tr><tr>'
        }
    }
    str += '</table>';

    console.log(str);
    document.write(str);
}