//function3.js

function sumNumber() {
    console.log(arguments); //arguments : 인수
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sumNumber(1, 2, 3, 4, 5));

sumNumber(1, 2, 3, 4, 5);
// sumNumber(1,2,3,4,5,6,7,8,9);

//나머지 파라미터
function sumParam(...args) { // 파라미터의 갯수가 몇개인지 모르지만 가변적으로 ...처리함, 배열요소
    let result = 0;
    args.forEach((val) => {
        result += val;
    }); //callback함수
    return result;
}

console.log(sumParam(1, 2, 3, 4, 5, 6));

//커링함수
function orderSet(burger, beverage) {
    console.log('세트: ' + burger + ', ' + beverage)
}
orderSet('치즈버거', '콜라');

function orderSet_curring(burger) {
    return function (beverage) {
        console.log('버거: ' + burger + ', 음료: ' + beverage);
    }
}
console.log(orderSet_curring('치즈버거')('콜라'));

let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); //() 함수실행
beverageFnc('환타'); //() 함수실행

orderSet_curring('치즈버거')('콜라');

function orderSet2(burger) {
    return function orderBeverage(beverage) {
        return function orderSide(side) {
            return function orderKetchup(yn) {
                return function orderChicken(count) {
                    console.log('세트: ' + burger + ', ' + beverage + ', ' + side + ', 케첩(' + yn + ', 조각치킨 ' + count + '개');
                }
            }
        }
    }
}

let order = orderSet2('치즈버거')('콜라');

let args = [1, 3, 5];

function anyFnc(...args) {

}

let another = [4, 5, 6]
let otherArgs = [-1, ...args, -2]; // 두 배열요소를 합쳐서 새로운 배열
console.log(args.concat(another)); //concat 앞의 배열 + 뒤의 배열, 5는 중복이여서 하나만

let obj1 = {
    name: '이동식',
    age: 38,
    weight: 65.8
};
let newObj = {
    name: '문나곰',
    height: 189.9
};
let obj3 = {
    sno: '12345'
}
let obj2 = {
    ...newObj,
    ...obj1,
    ...obj3
}; //new Object();     없는것은 추가, 겹치는것은 첫번째..? 뭐야 이거
console.log(obj1, obj2);

let comObj = {
    sno: '22-20125',
    sname: '문곰희',
    score: '86',
    hobby: ['산책', '거리구경'],
    pet: [{
        pname: '페페',
        age: 1
    }, {
        cname: '웨옹',
        age: 3
    }]
}

comObj.sname; //이름
comObj.hobby[0]; //첫번째 취미
comObj.pet[0].age; //첫번째 반려동물의 나이

console.log(comObj.pet[1].cname);

//p.78 05.나머지 파라메터
//1
function restparams(...args) {
    console.log(args);
}
restparams(1, 2, 3, 4);

//2
const rest2 = (arg1, arg2, ...args) => {
    console.log([arg1, arg2, args]);
}
rest2(1, 2, 3, 4);
rest2(1, 2);
rest2(1);

//3
function sum(a, b, ...args) {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    } else {
        return 0;
    }
    args.forEach(function (arg) {
        result += arg;
    })
    return result;
}
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2));
console.log(sum(2));

//4
const sum1 = (a, b, ...args) => {
    let result = 0;
    if (a != undefined) {
        result = a;
    } else {
        return 0;
    }
    if (b != undefined) {
        result += b;
    }
    result += args.length > 0 ? args.reduce((subsum, arg) => subsum += arg) : 0;
    return result;
}
console.log(sum1(1, 2, 3, 4));
console.log(sum1(1, 2));
console.log(sum1(1));

//p.81 06.화살표함수 기초
let multiply = (a, b, ...args) => {
    let result = a * b;
    for (let i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}
console.log(multiply(1, 2, 3, 4));

//p.83 07.고차함수의 이해
const arr = [1, 2, 3, 4, 5];
const arr2x = [];
for (let i = 0; i < arr.length; i++) {
    arr2x.push(arr[i] * 2);
}
console.log(arr2x);

var a = 1;
var b = 5;

function outerFunc() {
    var b;

    function innerFunc() {
        a = b;
    }
    console.log(a, b);
    a = 3;
    b = 4;
    innerFunc(a, b);
    b = 2;
    console.log(a, b);
}
outerFunc();
console.log(a, b);