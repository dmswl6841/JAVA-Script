//

//테이블 생성 함수
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border=1>';

    let head = createHeader(fields);
    tag += head;

    let body = createBody(aryData); //<tbody><tr><td>값</td>...</tr></tbody>
    tag += body

    tag += '</table>'
    //<table></table>
    return tag;
}

//헤더부분
function createHeader(val) {
    tag = '<thead><tr>';
    for (i = 0; i < val.length; i++) {
        tag += '<td>' + val[i] + '</td>'
    }
    tag += '</tr></thead>'
    return tag;
}
//바디부분
function createBody(arr) {
    tag = '<tbody>'
    arr.forEach(function (val) {
        tag += '<tr>'
        for (let field in val) {
            tag += '<td>' + val[field] + ' </td>';
        }
        tag += '</tr>'
    });
    tag += '</tbody>'
}

let data = [{
        sname: '임파트',
        age: 23,
        height: 168.4,
        weight: 59
    },
    {
        sname: '마스터',
        age: 56,
        height: 178.6,
        weight: 65,   
    },
    {
        sname: '냥돌이',
        age: 15,
        height: 158.5,
        weight: 51
    }
]
let str = createTable(data);


console.log(str)
document.write(str)