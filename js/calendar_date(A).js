// calendar_date.js

let today = new Date('2022-06');
today = new Date(2022, 7, 0);
console.log(`올해는 ${today.getFullYear()} 년도`);
console.log(`이번달은 ${today.getMonth()+1} 월입니다.`); // 0 ~ 11
console.log(`오늘은 ${today.getDate() }일 입니다.`);
console.log(`오늘은 ${today.getDay()} `); // 요일정보. 0 ~ 6

// 달력 작성. 6월 작성. 6월1일의 요일. 6월의 마지막날..
let year = 2021; // 2021년..
let month = 6; // 6월달..

makeCalendar(year, month);

function makeCalendar(y, m) {
    let dayInfo = new Date(y, m - 1).getDay(); // 매개값으로 들어온 월의 요일.
    let lastDateInfo = new Date(y, m, 0).getDate(); // 마지막 날의 정보.
    // 년, 월 달력 정보 생성.
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = `<table border=1><caption> [ ${y}년 ${m}월 ]</caption><tr>`;
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    for (let i = 0; i < dayInfo; i++) {
        str += '<td></td>';
    }
    for (let i = 1; i <= lastDateInfo; i++) {
        str += '<td>' + i + '</td>';
        if ((dayInfo + i) % 7 == 0) { // 7의 배수.
            str += '</tr><tr>';
        }
    }
    str += '</tr></table>';
    document.write(str);
}