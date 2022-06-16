//table.js

let data = [{
        sname: '임파트',
        age: 20,
        height: 168.4,
        weight: 59
    },
    {
        sname: '마스터',
        age: 56,
        height: 178.6,
        weight: 65
    }
]

class Table {
    //생성자
    constructor(ary) {
        this.aryData = ary;
    }
    //메소드
    createTable() {
        this.tag = '<table border =1<tr>';
        //헤더정보 <thead>....</thead>
        for (let field in this.aryData[0]) {
            this.tag += '<th>' + field + '</th>';
        }
        this.tag += '</tr>'
        // this.tag = '<table border=1>'

        //바디 정보 <tbody>...</tbody>

        this.aryData.forEach((val, idx) => {
            // console.log(val);
            this.tag += '<tr>';
            for (let filed in val) {
                this.tag += '<td>' + val[filed] + '</td>';
            }
            this.tag += '</tr>'
        });
        this.tag += '</table>'

        return this.tag;
    }
}

let table = new Table(data);
let str = table.createTable(); // 표 형식으로
console.log(str);
document.write(str);


let names = ['다판다', '나이언', '허나비'];

let searchName = names.find(function (val) {
    // return val == '허나비'; // true일 때 반환.
    return val.length == 3;
})
console.log(searchName);


class Estimate {
    constructor(param) {
        this.unit = param;
    }
    //메소드
    getEstimate(unittype, width, height) { //견적가
        let priceinfo = this.unit.find(item => item.type == unittype);
        return priceinfo.price * width * height;
    }
    addUnit(unit) {
        this.unit.push(unit);
    }
}
let unitinfo = [{
    type: 'wood',
    price: 100
}, {
    type: 'iron',
    price: 300
}, {
    type: 'plastic',
    price: 200
}];
const estimator = new Estimate(unitinfo);
estimator.addUnit({
    type: 'glass',
    price: 500
});
let result = estimator.getEstimate('glass', 20, 20);
console.log(result);

//object 타입으로 가능
let obj = {};
obj.unit = unitinfo;
obj.getEstimate = function (unittype, width, height) {
    let priceinfo =this.unit.find(item => item.type == unittype);
    return priceinfo.price * width * height;
}
obj.addUnit = function (unit) {
    this.unit.push(unit);
}
let result2 = obj.getEstimate('wood', 20, 20);
console.log(result2);

