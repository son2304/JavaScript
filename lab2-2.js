// 자바스크립트 예제 2-2 = 호이스팅 예제
// 호이스팅 링크 : https://m.blog.naver.com/tcloe8/221549773024

class test{
    constructor(){

        console.log('log1 : ' + txt);
        // 실행하면 변수 선언이 없으나 에러가 발생하지 않음
        // 에러가 아닌 undefined라고 표시됨

        // 자바스크립트는 함수를 실행하기 전에 함수에 대한 메모리부터 할당함 = 변수를 정의하는 코드 앞에 변수를 사용하는 코드 배치 가능
        // 따라서 위처럼 선언하지 않은 txt변수를 호출하는 코드에서 에러가 발생하지 않고 undefined로 표시됨

        if(true) {
            var txt = 'text';
            console.log('log2 : ' + txt);
        }

        console.log('log3 : ' + txt);
    }
}

window.onload = () => {
    new test();
}