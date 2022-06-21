//for_loop.js

//배열관련 반복되는 메소드
//forEach : void (return 값이 없음)
//map : return값이 [배열], 원본값의 배열이 반환 A -> A' 이런식으로 나타남
//filter : [배열] A -> a 다른 배열로 나타남
//reduce : return값이 정해져있지않음. 문자열, Number, [배열], {}...

let ary = [3, 5, 8, 9, 12]; //배열 객체 : new Array();
ary.push(5); //배열의 마지막에에 새로운 배열 요소를 추가     // pop(); 배열의 마지막에 있는 배열 요소를 삭제 
ary.unshift(7); //배열의 맨 앞에 새로운 배열 요소를 추가        //shift(); 배열의 맨 앞에 있는 배열 요소를 삭제 

ary.splice(3, 1) //splice(인덱스값, 바꿀 요소의 개수, 대체할 값, )


// 1. forEach
let newAry = [];
let result = ary.forEach(firstCallBack);
// ary.forEach(elem => console.log(elem));

function firstCallBack(elem) {
    // console.log(elem)
    newAry.push(elem)
};

console.log(newAry);

// 2. map   :   배열에 들어있는 배열 요소 만큼 반환 (같은 수)
result = ary.map(elem => elem * 2);
//A -> A'=(A*2)
//A = [7, 3, 5, 9, 12, 5] -> A' = [14, 6, 10, 18, 24, 10]

console.log(result);

// 3. filter A-> a  
result = ary.filter((elem, idx, arr) => elem % 2 == 0); //
//ary.filter((배열에 들어있는 값, 인덱스, 배열)
console.log(result);

// 4. reduce A -> 문자열, Number, [], {}, .... 다양하게 값을 반환
result = ary.reduce((accum, curr, currIdx, arr) => {
    console.log(accum, curr, currIdx, arr);
    return accum + curr;
}, );
//ary.reduce((초기값 or 누적값,배열에 들어있는 값, 인덱스, 배열)=>{},내가 리턴하고 싶은 초기 값 )
//리턴 되는 값을 초기값으로 사용, 리턴 값이 없으면 undefined가 된다.

//2. map과 같은 기능
result = ary.reduce((accum, curr) => {
    // console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []); 

console.log(result);

// filter, map과 같은 기능
result = ary.reduce((accum, curr, currIdx) => {
    // console.log(accum, curr,currIdx);
    if (currIdx > 3) {
        accum.push(curr * 2)
    }
    console.log(accum, curr,currIdx);
    return accum;
}, []); 

console.log(result);