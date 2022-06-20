let data =
    `[{"id":1,"first_name":"Ignace","last_name":"Wynch","email":"iwynch0@bbb.org","gender":"Male","salary":4886},
{"id":2,"first_name":"Marty","last_name":"Grimsdyke","email":"mgrimsdyke1@hatena.ne.jp","gender":"Male","salary":1887},
{"id":3,"first_name":"Kimmy","last_name":"Goodin","email":"kgoodin2@pcworld.com","gender":"Female","salary":510},
{"id":4,"first_name":"Bertie","last_name":"Heningam","email":"bheningam3@ucoz.com","gender":"Male","salary":1623},
{"id":5,"first_name":"Alick","last_name":"Rylatt","email":"arylatt4@miibeian.gov.cn","gender":"Male","salary":1202},
{"id":6,"first_name":"Titos","last_name":"Leer","email":"tleer5@upenn.edu","gender":"Male","salary":3095},
{"id":7,"first_name":"Ingrid","last_name":"Beinisch","email":"ibeinisch6@sciencedirect.com","gender":"Female","salary":2989},
{"id":8,"first_name":"Harwell","last_name":"Fuster","email":"hfuster7@qq.com","gender":"Male","salary":3651},
{"id":9,"first_name":"Rozalin","last_name":"Davidof","email":"rdavidof8@marketwatch.com","gender":"Female","salary":3454},
{"id":10,"first_name":"Brynne","last_name":"Elmore","email":"belmore9@sfgate.com","gender":"Female","salary":4432},
{"id":11,"first_name":"Amelita","last_name":"Tilt","email":"atilta@hao123.com","gender":"Female","salary":1966},
{"id":12,"first_name":"Beverie","last_name":"Gutridge","email":"bgutridgeb@miibeian.gov.cn","gender":"Female","salary":1687},
{"id":13,"first_name":"Arlee","last_name":"Gheraldi","email":"agheraldic@vinaora.com","gender":"Female","salary":602},
{"id":14,"first_name":"Elaina","last_name":"Rappoport","email":"erappoportd@privacy.gov.au","gender":"Genderqueer","salary":3766},
{"id":15,"first_name":"Carlin","last_name":"Moggach","email":"cmoggache@vinaora.com","gender":"Female","salary":4166}]`

let objAry = JSON.parse(data);
console.log(data);
console.log(objAry);

let over3000 = objAry.filter((val, idx) => {
    return val.salary >= 3000;

}).map((val, idx) => {
    let obj = {};
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.sal = val.salary;
    return obj;
})

console.log(over3000);

//Female 값 평균값 기능 구현
let avg, sum;
sum = 0;
count = 0;
let gender = objAry.filter(val => val.gender = 'Female')
gender.forEach(val => {
    sum += val.salary
    count++;
});

avg = sum / count;

console.log(`여사원의 급여 평균 : ${avg}`);

let salaries = [];
objAry.forEach(val => salaries.push(val.salary));
console.log(salaries);

function getMaxValue(ary) {
    let max = ary[0];
    for (let i = 1; i < ary.length; i++) {
        if (max < ary[i]) {
            max = ary[i]
        }
    }
    return max
}

let maxVal = getMaxValue(salaries);
console.log(`가장 큰 값 : ${maxVal}`);
//1
function sortAscend(ary) {
    //오름차순 정렬하는 함수
    for (let i = 0; i < ary.length; i++) {
        for (let j = i + 1; j < ary.length; j++) {
            if (ary[i] > ary[j]) {
                let a = ary[i];
                ary[i] = ary[j];
                ary[j] = a;
            }
        }
    }
    return ary;
}
sortAscend(salaries);
console.log(salaries);



// function sortAscend1(ary=[]){
//     let numAry = ary;
//     let newAry = [];
//     numAry.forEach(val => {
//         let maxVal = getMaxValue(numAry);
//         newAry.push(maxVal);
//         let idx = numAry.indexOf(maxVal);
//         numAry.splice(idx,1,10000);
//     });
//     return numAry
// }
// sortAscend1(salaries);
// console.log(salaries);

console.clear();

//reduce 메소드
result = salaries.reduce(function (accum, curr, curIdx, ary) {
    console.log(accum, curr, curIdx, ary); //초기값, 배열의 값, 배열위치, 배열
    return curr + accum;
}, 0); //map, filter와 같은 메소드

console.log(`최종결과: ${result}`)

result = [1, 2, 3, 4].reduce(function (accum, curr) {
    accum.push(curr); //배열에 추가
    return accum;
    // return curr;
}, []);
result = [1, 2, 3, 4].filter(val => {
    if (val % 2 == 0) {
        return val;
    }
})
console.log(`${result}`)

console.clear();
//<ul><li>Apple</li>...
result = ['Apple', 'Banana', 'Cherry'].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == 0) {
        accum = '<ul>';
    }
    accum += `<li>${curr}</li>`;
    if (currIdx == ary.length - 1) {
        accum += '</ul>'
    }
    console.log(accum);
    return accum;
}, '');
console.log(result);
document.write(result)

result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    if (accum < curr) {}
    return curr;
}, 0); //max값을 반환

console.log(result);

result = [3, 2, 4, 1, 5].reduce((accum, curr) => {
    return accum + curr;
}, 0)
console.log(result);

result = [3, 2, 4, 1, 5].reduce((accum, curr, currIdx, ary) => {
    if (currIdx == ary.length - 1) {
        return (accum + curr) / ary.length;
    }
    return accum + curr;
})