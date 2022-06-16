// object.js
//객체 == 인스턴트(클래스의 구조를 실체하나 만든것)
const student = {
    sno: '22-0102',
    sname: '문나곰',
    mathScore: 80,
    engScore: 90,
    age: 18,
    showInfo: function () {
        return '이름은' + this.sname + ', 나이는 : ' + this.age
    }
}

const student2 = {
    sno: '20-0902',
    sname: '이나불',
    mathScore: 80,
    engScore: 75,
    age: 18,
    showInfo: function () {
        return '이름은' + this.sname + ', 나이는 : ' + this.age
    }
}

class Student {
    constructor(sno, sname, age) { //생성자
        this.sno = sno;
        this.sname=sname;
        this.age=age;
    }
    //메소드
    setMathScore(mathScore){
        this.mathScore = mathScore;
    }
    setEngScore(engScore){
        this.engScore = engScore;
    }
    showInfo () {
        return '이름은' + this.sname + ', 나이는 : ' + this.age
    }
}

const student3 = new Student('22-0111','허숙희',25);
student3.setMathScore = 87;
student3.setEngScore=76;

console.log(student2);
console.log(student3);