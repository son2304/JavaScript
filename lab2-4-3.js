// 자바스크립트 예제 2-4-3 = 제어문 예제

class test{
    constructor(){
        console.log('## for ##');
        const colors = ['red', 'blue', 'green'];
        for(let i = 0; i < colors.length; i++){
            console.log(colors[i]);
        }
        // for문으로 배열 출력 : 인덱스로 접근함

        console.log('## while ##');
        var i = 0;
        while(colors[i] != null){
            console.log(colors[i]);
            i++;
        }
        // while문으로 배열 출력 : 인덱스로 접근함

        console.log('## forEach ##');
        colors.forEach(function(value){
            console.log(value);
        });
        // forEach문으로 배열 출력

        console.log('## forEach with Arrow ##');
        colors.forEach(value => console.log(value));
        // forEach문에 => 연산자로 배열 출력 : forEach문 코드가 간결해짐
    }
}

window.onload=()=>{
    new test();
}