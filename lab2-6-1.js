// 자바스크립트 예제 2-6-1 = 함수 관련 예제

class test{
    constructor(){

        var sum2;
        function calc(a, b) {
            let sum1 = a + b;
            sum2 = a + b;
            return sum1;
        }
        // calc 함수 : a, b 두 개의 값을 받아 더한 값을 반환
        // 예제에서는 sum2가 정의된 코드가 없어 에러 발생함 = sum2를 정의하는 코드 추가 필요
          
        console.log(calc(20, 30));
        // 50 출력
          
          
        var calc1 = function(a, b) {
            return a+b;
        }
        // 함수로 선언된 변수
          
        function calc2(func) {
            console.log(func(20,30));
        }
        // 함수를 인자로 받는 함수
          
        console.log(calc1(20,30));
        // 50 출력

        calc2(calc1);
        // func에 calc1이 들어가고 func(20,30)은 calc1(20,30)과 같음
        // 50 출력
        
        let funcArr = [function() {console.log("v1")}, "v2"];
        // 배열 원소에서 함수를 사용하는 방법
          
        let mapArr = new Map();
        mapArr.set("calcFunc",function(n1,n2) {return n1*n2});
        // map 원소에서 함수를 사용하는 방법
          
        console.log(funcArr[0]());
        // 함수 실행 "v1" 출력
        // undefined 출력 *왜 나오는지 찾아볼것



        console.log(mapArr.get("calcFunc")(20,10));
        // map 원소에서 "calcFunc"라는 키 값을 갖는 원소 = function(n1, n2) 함수ㄴ
        // 20*10 으로 200 출력

    }
}

window.onload=()=>{
    new test();
}