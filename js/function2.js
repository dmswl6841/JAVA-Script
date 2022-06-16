//function2.js

//함수 정의문
function sumAry(ary) { //매개변수
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
//=> const sumAry = function(ary){...}; 위의 함수 정의문을 함수 표현식으로 정의

let args = [1, 2, 3, 4, 5];
sumAry(args); //실행문 호출

console.log(sumAry(args));

let arrNum = [1, 2, 3];
sumAry(arrNum);

console.log(sumAry(arrNum));

//함수 표현식
const sum = function (num1, num2) {
    if (!num1) { //undefined -> false 의미(null, 0 , ' ')
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; //3항 연산자
    //num2가 undefined이라면 0, 그렇지 않다면 num2를 반환

    return num1 + num2;
}

console.log(sum(10, 20, 30)); //함수정의문()    변수의 수가 다르지만 에러없이 앞의 두 변수만 사용한다.

const sum2 = sum; //함수정의문
console.log(sum2(30, 40, 50));

console.log(sumAry)

//함수 표현식
// const sayHello = function (name) {
//     return 'Hello ' + name;
// }
const sayHello = name => 'Hello ' + name; //화살표 함수
//상수 = 매개변수 => 리턴값
//메소드의 매개값 (콜백 함수)

console.log(sayHello('홍길동'))

let arr = ['천리마', '우파랑', '라플라'];
arr.forEach(function (val /*,idx,ary*/ ) { //배열 각각의 요소에 대해 함수를 실행하는 구문
    sayHello(val);
    console.log(sayHello(val));
});

//=>
arr.forEach((val) => console.log(sayHello(val)));

arrNum = [29, 34, 12, 55, 29, 42];
//1. 배열의 각 요소 중 짝수 값만 더하도록 sumEven(); 함수 선언
function sumEven(ary) {
    let sum = 0;
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] % 2 == 0) {
            sum += ary[i];
        }
    }
    return sum;
}

arrNum.forEach((val) => console.log(sumEven(arrNum)));

//2. 배열의 홀수번째 요소의 합만 구하는 sumOdd(); 함수선언
function sumOdd(ary) {
    let sum = 0;
    for (let i = 0; i < ary.length; i++) {
        if (i % 2 == 0) {
            sum += ary[i];
        }
    }
    return sum;
}

arrNum.forEach((ind) => console.log(sumOdd(arrNum)));