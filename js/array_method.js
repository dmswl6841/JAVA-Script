// array_method.js

//some  :조건을 만족하는 요소중 하나 true/false
//every :조건을 만족하는 요소 true/false
//find : 찾기   첫번째 값을 리턴 / findIndex : 첫번째 인덱스 값을 리턴
//indexOf :배열 요소 => 인덱스 값 반환
//sort() : 정렬
//split() : 문자열 => 배열
//join() : 배열 => 문자열

let ind = "This is a story".indexOf('st');
ind = [1, 2, 3, 4, 5].indexOf(8);
console.log(ind)

let str = 'Littering a dark and dreary road lay the past'
let strAry = str.split(' '); //반환타입이 배열
ind = strAry.indexOf('CSS') //lastIndexOf() : 뒤에서부터 찾음

let names = ['박은지', '윤정은', '박지혜', '김나희']
ind = names.indexOf('김나희');
console.log(ind);

result = names.find(function (elem, idx, arr) {
    return elem == '김나희'
})
console.log(result);

// 1. find
result = [6, 4, 3, 7, 14].find(elem => {
    return elem > 100; //find : false일 때는 undefinded 반환
})
console.log(result);

// 1-1 findIndex
result = [6, 4, 3, 7, 14].findIndex(elem => {
    return elem > 100; //findIndex : false일 때는 -1 반환
})
console.log(result);

// 2. some
result = [6, 4, 3, 21, 14].some((elem, idx, arr) => {
    console.log(elem, idx, arr)
    return elem > 20; //만족하는 요소가 하나라도 있는 경우 true;
})
console.log(result);

// 3. every
result = [6, 4, 3, 21, 14].every((elem, idx, arr) => {
    console.log(elem, idx, arr)
    return elem % 2 == 0; //만족하는 요소가 전부인 경우 true;
})
console.log(result);

let tempAry = [];
for (let i = 0; i < 15; i++) {
    let temp = parseInt(Math.random() * 10) + 1; //1부터 10까지의 임의의 수 //parseInt 정수로 바꿔주는
    console.log(temp);
    tempAry.push(temp);
}
// Q1. tempAry 배열의 값이 전부 짝수인지 확인
let A1 = tempAry.every(elem => elem % 2 == 0);
console.log('A1 : ' + A1);
// Q2. tempAry 배열의 중 3의 배수가 존재하는지 확인
let A2 = tempAry.some(elem => elem % 3 == 0);
let A2_1 = tempAry.filter(elem => elem % 3 == 0);
console.log('A2 : ' + A2);
console.log(A2_1);
// Q3. tempAry 배열의 중 5보다 큰 값이 있으면 그 값을 반환
let A3 = tempAry.filter(elem => elem > 5)
console.log('A3 : ' + A3);

console.clear();

//sort : 정렬(default : 가나다 순)
result = [6, 4, 3, 21, 14].sort(function (a, b) {
    // if (a-b < 0){   
    //     return -1;  //오름차순
    // }else {
    //     return 1;  //내림차순
    // }
});
// = if (a<b){ return -1; } else { return 1;};
// = return a - b; 오름차순 // b-a 내림차순 
console.log(result)

let objAry = [{
        name: '왕판다',
        age: 38
    },
    {
        name: '김꽃잎',
        age: 43
    },
    {
        name: '조피피',
        age: 4
    }
];
console.clear();
console.log('김' > '조'); //a,b,c
result = objAry.sort(function (a, b) {
    // if (a.name < b.name) {
    //     return -1;
    // } else {
    //     return 1;
    // }
    return a.age < b.age ? -1 : 1;
});
console.log(result);

//join
result = ['라밍고', '하선로', '김따니', '김만두'].join('-'); //
names = '권소정, 김하은, 유선희, 김가윤';
newNames = names.split(', ');
console.log(newNames);
result = newNames.sort(function (a, b) {
    if (a < b) {
        return -1;
    } else {
        return 1;
    }
})

console.log(result.join(', '));

strAry = 'Littering'.split('');
strAry.forEach(elem => {
    let cnt = 0;
    cnt += elem = 't' ? 1 : 0
    console.log(cnt)
})
cnt = strAry.reduce((accum, curr) => {
    // console.log(accum, curr)
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0)
console.log('cnt : ' + cnt);