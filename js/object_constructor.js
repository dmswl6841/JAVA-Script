//

//객채 생성
function Student(sno, sname, age) {
    this.sno = sno;
    this.sname = sname;
    this.age = age;
    this.showInfo = function () {
        return '이름은 ' + this.sname + ', 나이는 ' + this.age;
    }
};

let s1 = new Student('22-1111', '강솔', '20');
let s2 = s1;
s2.sno = '22-2222';
console.log(s1.showInfo());


function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () { //this를 안쓰면 전역 변수가 됨
        this.tag += '<table border=1>';
        this.createHead();
        // debugger
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }
    //1
    this.createHead = function () {
        this.tag += '<thead><tr>';
        for (i = 0; i < this.fields.length; i++) {
            this.tag += '<th>' + this.fields[i] + '</th>'
        }
        this.tag += '</tr></thead>'
    }
    // 2
    // this.createHead = function () {
    //     this.tag += '<thead><tr>';
    // this.fields.forEach((elem)=>{
    //     this.tag += '<th>' +elem+ '</th>'; //this.tag => 사용
    // })
    //     for (i = 0; i < this.fields.length; i++) {
    //         this.tag += '<td>' + this.fields[i] + '</td>'
    //     }
    //     this.tag += '</tr></thead>'
    // }

    // //1
    // this.createBody = function () {
    //     console.log(this.tag);
    //     this.tag += '<tbody>';
    //     let str = this.tag;
    //     this.data.forEach(function (val) { //function일 경우 this.tag는 window? 이기때문에 위에 다시 선언해주어야함 (아직 안됨. 왜 안되는지 의문)
    //         str += '<tr>';
    //         for (let field in val) {
    //             str += '<td>' + val[field] + ' </td>';
    //         }
    //         str += '</tr>';
    //     })
    //     this.tag += '</tbody>';
    // }

    //2
    this.createBody = function () { //function과 화살표 함수는 비슷하지만 다르다
        this.tag += '<tbody>';
        this.data.forEach((val) => {
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + ' </td>';
            }
            this.tag += '</tr>';
        })
        this.tag += '</tbody>';
    }

};

let data = [{
        sname: '임파트',
        age: 23,
        height: 173.4,
        weight: 68
    },
    {
        sname: '김가을',
        age: 20,
        height: 168.6,
        weight: 63.3,
    },
    {
        sname: '냥돌이',
        age: 15,
        height: 158.5,
        weight: 51.8
    }
]
let t1 = new Table(data);

// fucntion() {this => window} / new 함수 => this : 객체(Object) / 이벤트 => this : 이벤트
let str = t1.createTable()
console.log(str);
document.write(str);