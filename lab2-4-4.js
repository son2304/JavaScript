// 자바스크립트 예제 2-4-4 = 제어문(for-in, for-of-for) 예제

class test{
    constructor(){
        const colors = ['red', 'blue', 'green'];

        console.log('## for-in ##');
        for(var index in colors){
            console.log(colors[index]);
        }
        // for-in 에서 index변수는 객체의 속성이 전달됨 (배열의 경우 인덱스)

        console.log('## for-of-for ##');
        for(var value of colors){
            console.log(value);
        }
    }
}

window.onload=()=>{
    new test();
}