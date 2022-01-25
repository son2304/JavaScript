// 자바스크립트 예제 2-6-2 = 객체 이니셜라이저

class test{
    constructor(){
        let student = {
            'id' : 2019101,
            'name' : 'HongGilDong',
            'scores' : [95,80,91,85],
            'getTotalScore' : function(){
                return this.scores.reduce((prev, curr) => prev + curr);
            }
        }

        // 객체 선언은 {} 블럭으로 이루어짐
        // 'key' : value 구조

        console.log(student.getTotalScore());
        // getTotalScore는 메소드로 배열의 reduce()를 이용해 원소들의 합을 구함
    }
}

window.onload=()=>{
    new test();
}