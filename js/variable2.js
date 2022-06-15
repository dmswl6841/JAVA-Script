//variable2.js

let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27]; //변수 선언&초기화
ary[ary.length] = 50;
ary[ary.length] = 80;
ary[ary.length] = 65;
ary[10] = 100;

console.log(ary);
console.log(typeof ary[8]);

for (let i = 0; i < ary.length; i++) {
    console.log(i + '번째 ' + ary[i])
}

ary = ['사과', '바나나', '수박', '복숭아', ];

document.write('<ul>');
console.clear(); //로그 청소
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>')
}
document.write('</ul>');

ary = [{
        name: '강솔',
        age: 20,
        phone: '010-0000-0000'
    },
    {
        name: '김가을',
        age: 21,
        phone: '010-1111-1111'
    },
    {
        name: '나햄지',
        age: 32,
        phone: '010-2222-2222'
    },
    {
        name: '이화원',
        age: 40,
        phone: '010-3333-3333'
    },
    {
        name: '양순자',
        age: 76,
        phone: '010-5555-5555'
    }
]

// document.write('<ul>');
// for(let person of ary){
//     document.write('<li>'+person['name']+','+person['phone']+'</li>')
// }
// document.write('</ul>');

let str = '';
str += '<ul>';
for (person of ary) {
    str += '<li>' + person['name'] + ', ' + person['age'] + '세, ' + person['phone'] + '</li>';
}
str += '</ul>'
document.write(str)

str += '<table>'
str = '<table border =1>';
for (person of ary) {
    str += '<tr>';

    str += '<td>' + person['name'] + '</td>' + '<td>' + person['age'] + '세' + '</td> ' + '<td>' + person['phone'] + '</td>';

    str += '</tr>';
}
str += '</table>'
console.log(str);
document.write(str);

const v1 = 'hello';
// v1 = 'new';


//원시타입 VS 참조타입

//<원시타입>
let n1 = 10;
let n2 = n1;
n1 = 20;

console.log(n1, n2);

//<참조타입>
let o1 = {name:'one'};
let o2 = o1;
o2.name = 'two;';
o1.name = 'three';
console.log(o1, o2);


const obj = {
    sno: '22-1234',
    sname: 'Sam'
}
obj.sno = '22-2222'; //obj의 상수 변수에 값을 새롭게 선언X, obj가 참조하고 있는 속성의 값을 변경O
// obj = ''; //새로운 값을 할당 => 오류
console.log(obj.sno);

//var VS let    : 변수선언

//<var> : 초창기 자바 스크립트에서 사용
//var 변수 선언 : 변수의 scope => 전역변수(스크립트 안에서 선언된 변수)/지역변수(함수 안에서 선언된 함수)
var var1 = 'Hello'; //전역변수

function localFnc(){
    var var2 = 'nice';
    console.log(var2);
    console.log(var1);
}
localFnc();
// console.log(var2);  //지역변수이기 때문에 함수 밖에서는 사용X
console.log(var1);

//<let>
let var3 = 'Hello'; //전역변수
{
    let var3 = 'new Hello';
    console.log(var3);
}
console.log(var3);

function localFnc1(){
    let var4 = 'nice';
    console.log(var4);
    console.log(var3);
}
localFnc1();
// console.log(var2);  //지역변수이기 때문에 함수 밖에서는 사용X
console.log(var3);