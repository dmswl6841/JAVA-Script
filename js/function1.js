//function1.js

function sum(n1, n2){
    return n1+n2;
}

console.log(sum(10,20));
console.log(sum('10','20'));    //문자로 인식해서 1020이 출력

function sub(v1, v2){
    return v1-v2;
}

console.log(sub(20,10));
console.log(sub('20','10'));    //문자열이지만 숫자타입으로 변환되어 10 출력

let sum1 = 0;
function sumAry(ary){
    for (let i=0; i<ary.length; i++) {
       sum1+=ary[i]
    }
    return sum1;
}
let numAry = [20,27,33,19,44]
let result = sumAry(numAry);

console.log('배열의 합 : '+result);

result=0;
numAry.forEach(function(val, idx, ary){
    // console.log(a, b, c);
    if(val%2==1){
    result += val;
    }

}); //메소드의 매개값으로 함수:콜백 함수

console.log('홀수의 합 : '+result);
