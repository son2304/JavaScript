// 자바스크립트 예제 2-4-1 = 제어문(switch) 예제

class test{
    constructor(){
        let level = prompt("Enter your level(A/B/C)");
        // prompt 함수로 변수 level 값 입력받음

        switch(level){
            case 'A':
                console.log('VIP level'); break; // 입력값이 A인 경우 'VIP level' 출력
            case 'B':
                console.log('Basic level');break; // 입력값이 B인 경우 'Basic level' 출력
            default:
                console.log('No level');break; // 입력값이 A또는 B가 아닌 경우 'No level' 출력
        }
        // switch문으로 입력값에 따른 결과 출력
    }
}

window.onload=()=>{
    new test();
}