//variable3.js

let str = '';
// let ary=[];
let num = 2;
// debuggers
str += '<table>'
str = '<table border =1>';
for (let i = 1; i <= 9; i++) {
    str += '<tr>';
    str += '<td>' + num + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + (num * i) + '</td></tr>';
};

str = '';
str += '</table>';
// console.log(str);
document.write(str);

str += '<table>'
str = '<table border = 1>';
for (let i = 1; i < 32; i++) {
    str += '<td>' + i + '</td>'
    if (i % 7 == 0) {
        str += '</tr><tr>'
    }
}
str += '</table>';
console.log(str);
document.write(str);

function getFirstDay(mon) {
    switch (mon) {
        case 6:
            return 4;
        case 7:
            return 6;
        default:
            0;
    }
}
console.log(getFirstDay(6));
document.write(getFirstDay(6));