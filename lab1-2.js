// 자바스크립트 예제 1-2 = 이름 물어보고 입력된 이름 출력하기

class Welcome{
    constructor(){
        var name = prompt('Input your name!!');
        // prompt 함수 = 간단한 입력을 받을 수 있는 내장 함수
        document.write('Welcome ' + name);
        // 변수 name에 prompt로 받은 값을 본문에 출력
    }
}

window.onload = () => {
    new Welcome();
}