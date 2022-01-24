// 자바스크립트 예제 2-4-2 = 제어문(for) 예제

class test{
    constructor(){
        for(let dan = 2; dan <= 9; dan++){
            console.log("##" + dan + " times table ##");
            for(let i = 1; i <= 9; i++){
                console.log(dan + " * " + i + " = " + dan*i);
            }
        }
        // 중첩 for문을 이용해 구구단 출력
    }
}

window.onload=()=>{
    new test();
}