let arr = [];
arr[0] = 'Hello';
arr[1] = 100;
arr[2] = true;

delete arr[1];  //배열 삭제, 삭제된 자리는 빈채로 남아있다

console.log(arr);

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//확장 for
for(let val of arr){
    console.log(val)
}

//forEach
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);    //배열 값이 undefined 이면 반복에서 제외
});

console.log('-------------------------------------------------');

arr.push('Apple');  //추가

arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);    //배열 값이 undefined 이면 반복에서 제외
});

console.log('-------------------------------------------------');

arr.push('Melon');  //추가
arr.unshift('Banana');  //맨 앞자리에 추가
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);    //배열 값이 undefined 이면 반복에서 제외
});

console.log('-------------------------------------------------');

arr.push('Orange');  //추가
arr.unshift('Mango');  //맨 앞자리에 추가
arr.pop();  //마지막 삭제
arr.shift(); //첫번째 삭제
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);    //배열 값이 undefined 이면 반복에서 제외
});

console.log('-------------------------------------------------');

arr.push('Orange');  //추가
arr.unshift('Mango');  //맨 앞자리에 추가
arr.splice(0,0,'Lemon') //추가, 수정, 삭제 (0,0,X):추가, (0,1,X): 0번째 위치에 1개의 값을 x로 대체 (0,3):대체할 값이 없다면 삭제
arr.forEach((val, idx) => {
    console.log(`${idx} => ${val}`);    //배열 값이 undefined 이면 반복에서 제외
});