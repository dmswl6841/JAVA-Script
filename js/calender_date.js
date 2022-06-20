//calender_date.js

let today = new Date('2022-06'); //일 정보가 없으면 1일로
today = new Date(2022, 5, 0);

console.log(today.getFullYear()); //연도를 가져온다
console.log(`올해는 ${today.getFullYear()}년 입니다.`);
console.log(today.getMonth()); //월은 0~11까지 나온다.
console.log(`이번달은 ${today.getMonth()+1}월 입니다.`);
console.log(today.getDate());
console.log(`오늘은 ${today.getDate()}일 입니다.`);
console.log(today.getDay()); //요일은 0~6 0:일요일

//달력 작성 if 6월 작성 6월1일의 요일, 6월의 마지막날

let year = 2022;
let month = 6;

makeCalender(year,month);

function makeCalender(y, m) {
    let firstDay = new Date(y, m - 1).getDay(); //1일의 요일
    let lastDate = new Date(y, m, 0).getDate(); //해당 월의 마지막 날
    // console.log(lastDate)
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption>[${y}년 ${m}월]</caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    for (let i = 0; i < firstDay; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= lastDate; i++) {
        str += '<td>' + i + '</td>';
        if ((firstDay + i) % 7 == 0) {
            str += `</tr><tr>`;
        }
    }
    str += '</tr></table>';
    document.write(str);
}
// console.log(makeCalender(str));