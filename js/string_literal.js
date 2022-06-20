//string_literal.js
let str = 'Hello'; //"Hello"
str = `Hello`; //문자열 표현방식

let person = {
    name: 'hong',
    age: 20,
    showInfo: function () {
        // return '이름은 '+ this.name+', 나이는 '+ this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`
    }
}
console.log(person.showInfo());

console.log(`나의 이름은 ${person.name}`);

console.log(`${person.age>=20?'성인':'청소년'}`);

let strings = 'This\nis\na\nboy'; //''는 한줄 밑에 쓰려면 \n을 사용해야한다

strings = `This
is
a
girl`; //``는 쓰이는 그대로 나온다.

console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let jm = '900101-2000000';
jm = '900101-2000000';


function checkGender(num = '') {
    let jmnum = num.replace('-', '');
    jmnum = num.substr(-7, 1);

    console.log(jmnum);

    switch (jmnum) {
        case 1:
        case 3:
            return '남자';
        case 2:
        case 4:
            return '여자';
    }

}
let result = checkGender(jm);
console.log(result);