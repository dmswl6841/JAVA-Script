//variable.js

console.log('Hello, World!')
document.write('<h3>Hello, World!</h3>')

let num = 0; //let  : 변수 선언
num = 'hello' //들어가는 변수에 따라 변수타입이 변형된다.
num = 10; //number
num = 'ten' //string
num = true; //boolean
num = null; //object -> class의 인스턴스
let num1; //undefined : 한정되지 않은(무슨 값이든 들어올 수 있다.)

console.log(num)
console.log(num1)
console.log(typeof num) //typeof : 변수 타입

num1 = 100;
num2 = 200;
console.log(num1 + num2); //자바스크립트에서는 변수의 선언 없이 사용이 되면 객체 object의 속성을 가짐..?(전역객체) 

console.log(window); //웹 브라우저에서 제공하는 객체(java의 class)

// window.alert('페이지를 찾을 수 없습니다.'); //윈도우 기능 예시

//변수 : 학생이름, 학생번호, 영어, 수학
let student = new Object(); //object 선언
student.sno = '22-0123'; //student(object).sno(속성)
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 90;

console.log(student);

let person = {
    fname: '김민수',
    age: 20,
    height: 175.5, //height : 속성(필드)
    showInfo: function () { //showInfo : 메소드
        return '이름 : ' + this.fname + ' 나이 : ' + this.age + ' 키 : ' + this.height
    }
};
person.weight = '68.5'; //추가

console.log(person);
console.log(person.showInfo());
console.log(person['age']); //[''] 동적인 표현 가능
console.log(person.age);
let field = 'height';
console.log(person[field]);

//전체 필드를 for loop .. in
// debugger
for (let field in person) {
    console.log(field, '=>', person[field]);
}
console.log(field);

//변수: me  => 이름, 취미, 연락처, 주소, 소개(f): 이름, 취미, 연락처 반환

let me = {
    mname: '인은지',
    hobby: '게임',
    pnumber: '010-xxxx-xxxx',
    address: '대구광역시',
    intro: function () {
        return '이름 : ' + this.mname +', 취미 : '+ this.hobby +', 연락처 : '+ this.pnumber
    }
};
console.log(me.intro());