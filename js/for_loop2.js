//for_loop2.js

let data = `[{"id":1,"first_name":"Ignace","last_name":"Wynch","email":"iwynch0@bbb.org","gender":"Male","salary":4886},
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

let ary = JSON.parse(data); //문자열을 자바스크립트에서 사용하는 object로 변경
console.log(ary);
//forEach
// ary.forEach(elem => {
//     if (elem.id % 2 == 1) {
//         console.log(elem)
//     }
// });

let femaleAry = ary.filter((elem) => elem.gender == 'Female');
console.log(femaleAry);

console.clear();

let newCompany = ary.map((elem)=> {
    let newElem = {};   //A'
    newElem.nID = elem.id;
    newElem.name = elem.first_name+' '+ elem.last_name;
    newElem.salary = elem.salary*1.5;
    newElem.isNew = elem.salary > 4000 ? false : true;
    return newElem;
}).filter(elem => elem.isNew)
// .forEach(elem => {console.log(elem)});
console.log(newCompany);

console.clear();

let result = newCompany.reduce((accum, curr)=> {
    console.log(accum, curr.salary);
    if(curr.salary<=4000){
    sum = accum+curr.salary;
    }
    return sum;
},0);   //새로운 회사 직원들의 급여 합.
console.log(result);

//4천 이하