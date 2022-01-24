// 자바스크립트 예제 2-5-1 = 다양한 배열 선언

class test {
    constructor(){
        var numbers1 = [10,30,50,70,90];
        var numbers2 = new Array(20,40,60,80,100);
        // 단순 정수형 배열

        var mixedArr = ['a', 1, 'b', 2, new Date(), "today"];
        // 자료형이 섞인 배열
        var objArr = [
            {
                "id" : 20192010,
                "name" : "HongGilDong",
                "dept" : "Software"
            },
            {
                "id" : 20192011,
                "name" : "KimSarang",
                "dept" : "Business Management"
            },
            {
                "id" : 20192012,
                "name" : "KangDongSu",
                "dept" : "Computer Engineering"
            }
        ];
        // 객체형 배열

        console.log(numbers1);
        console.log(numbers2);
        console.log(mixedArr);
        console.log(objArr[2].name, objArr[2].dept);
        // 객체형 배열 접근 방식 = 인덱스 객체.속성명(key)로 접근 : ex) objArr[1].name
    }
}

window.onload=()=>{
    new test();
}