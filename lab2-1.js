// 자바스크립트 예제 2-1 = 변수, 자료형 실습

class lab2_1{
    constructor(){
        var txt1 = 'text1';
        // var로 txt1 변수 선언 및 입력
        console.log(txt1);

        if(true){
            var txt2 = 'text2';
            console.log(txt2);
        }
        // 일반적인 언어에서 if문 안에 쓰인 txt2는 밖에서 사용불가 = if문 내에서 선언함
        // 자바스크립트에서는 txt2 변수를 if문 밖에서 사용가능

        console.log(txt1);
        console.log(txt2);

        let txt1_1 = 'text1_1';
        const txt3 = 'hello';
        // const로 선언한 txt3 변수의 값은 변경이 불가능함
        console.log(txt1_1);

        if(true){
            let txt2_2 = 'text2_2';
            console.log(txt2_2);
        }
        // let으로 선언한 txt2_2 변수는 if문 밖에서 참조 불가
        // var은 블록을 고려하지 않고 어디에서나 접근 가능한 변수 선언, let은 범위를 제한하여 변수 선언

        console.log(txt1_1);
        // console.log(txt2_2); => error
        // txt3 = 'world'; => error
        console.log(txt3);
    }
}

window.onload = () => {
    new lab2_1();
}