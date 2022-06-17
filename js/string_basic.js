let str0 = 'Hello';
let str00 = new String('Hello');

console.log(str0== str00);//값
console.log(str0==str00.valueOf()); //타입&값

let num = new Number(123);  //number => object
let num0 = 123; //number
console.log((123).valueOf());   //객체 => 기본데이터타입 변환

//원시타입 : string, number, boolean. undefined
//객체타입: 함수, Object({}), 배열,NULL

console.log('123');

console.log("Hello".substring(0,3));

console.log(" Hello "); //공백 O
console.log(" Hello ".trim());  //공백 제거

console.log("This is the only story".slice(10,15)); //문자열의 10번째부터 5개 반환

//p.160 문자열

const str1 = 'This is the only one story';
console.log(str1.slice(8,11));
console.log(str1.slice(-8,11)); //시작 인덱스가 음수일 경우 빈 문자열 반환

console.log(str1.slice(10,4));  //시작 인덱스 > 끝 인덱스 = 빈 문자열
console.log(str1.slice(30));    //파라미터가 하나인 경우 시작 인덱스 값
console.log(str1.slice(0,-10)); //끝 인덱스가 음수일 경우 (문자열 길이 + 음수 값)이 끝 음수값이 됨
console.log(str1.slice(8,100)); //마지막 인텍스+1(문자열 길이 값)보다 큰 값은 마지막인덱스+1 로 대체
console.log(str1.slice());

//P.161 sunstring()
console.log(str1.substring(8,11));
console.log(str1.substring(11,8));
console.log(str1.substring(11,-8));
console.log(str1.substring(4,10));
console.log(str1.substring(10,4));
console.log(str1.substring(30));
console.log(str1.substring(0,-10));
console.log(str1.substring(8,100));
console.log(str1.substring());

//p. 162
console.log(str1.substr(8,11));
console.log(str1.substr(11,8));
console.log(str1.substr(11,-8));
console.log(str1.substr(-10,8));
console.log(str1.substr(10));
console.log(str1.substr(0,-10));
console.log(str1.substr(8,100));
console.log(str1.substr());


//p.163
const num1 = 123;
const num2 = 123.45
const bool = true;
const str = '문자열타입';
const arr = [1,2,'a','b',3];
const obj = {key: 'data', value: 15};

console.log(num1.toString());
console.log(num2.toString());
console.log(bool.toString());
console.log(str.toString());
console.log(arr.toString());
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());

let ary =[];
let oby= {};
let reg = /good/;
let regStr = 'Bad Morning, GOOD AFTER NOON, goodevening, and good night';
console.log(regStr.replace(/good/,'bad '));  //'good' 문자열을 'bad '로 바꿈
console.log(regStr.replace(/good/g,'bad ')); // /good/g => g가 없으면 맨 처음 것만, 있으면 전체

// !/\s : 공백, ~/i : 대소문자 구분X, ~/gi : 문자열 전체에서 변경

//sample 번호
let jmn = '9503041234567';
jmn = '950304-1234567';
jmn = '950304 2234567';

function checkGender(no){
    //입력번호의
    // debugger
    if(no.slice(8,9) == 1){
        return '남자';
    }
    else if (no.slice(8,9) == '2'){
        return '여자';
    }
}
console.log(checkGender(jmn));

//p.164 문자열 찾기
const str2 = 'good morning, good afternoon, good evening, and good night';
console.log(str2.indexOf('even'));
console.log(str2.lastIndexOf('good'));
console.log(str2.lastIndexOf('dawn'));

console.log(str2.indexOf('good',15));

console.log(str2.charAt(30));
console.log(str2.charAt(100));

console.log(str2.includes('even'));
console.log(str2.includes('dawn'));

const str3 = 'good morning, good afternoon, GOOD evening, and GOOD night';
console.log(str3.toLowerCase().indexOf('good'));
console.log(str3.toUpperCase().indexOf('GOOD'));
console.log(str3.search('GOOD'));
console.log(str3.search(/GOOD/i));

const str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(str4.match(/good\s\w+/gi)),
// ~\s : 공백, ~/i : 대소문자 구분X, ~/gi : 문자열 전체에서 변경, ~\w+ : 뒤에 단어가 1개 있는지
console.log(str4.match(/bad\s\w+/gi));
console.log(str4.match(/none\s\w+/gi));
console.log(str4.match('good'));

//p.168 문자열 바꾸기와 대소문자

const str5 = 'GOOD MORNING, GOOD AFTERNOON, good evening, and good night';
console.log(str5.replace('good','bad'));
console.log(str5.toLowerCase().replace('good','bad'));
console.log(str5.replace(/good/i,'bad'));
console.log(str5.replace(/good/gi,'bad'));

var str6 = 'this is the only method! 대소문자 변환 THE END';
console.log(str6.toLowerCase());
console.log(str6.toUpperCase());

const a = '문자열1';
const b = '문자열2';
console.log(a.concat(b));

console.log(''.concat(a,b));

let strarr = ['good', ' ', 'morning', '!'];
console.log(''.concat(...strarr));