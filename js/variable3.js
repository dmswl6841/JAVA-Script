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

