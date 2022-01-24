// 자바스크립트 예제 2-5-2 = 배열 관련 함수 사용

class test{
    constructor() {
        const colors = ['red', 'blue', 'green'];
        console.log("Original Array: " , colors);

        colors.push("yellow");
        console.log("push('yellow'): " , colors);
        // push함수 : 값 추가
        
        colors.pop();
        console.log("pop(): " , colors);
        // pop함수 : 값 제거

        colors.reverse();
        console.log("reverse(): " , colors);
        // reverse함수 : 배열 순서 반대로

        colors.sort();
        console.log("sort(): " , colors);
        // sort함수 : 배열 정렬

        const splicedcolors = colors.splice(0, 2);
        console.log("splice(): " , splicedcolors);
        /*
            splice 함수의 경우 시작인덱스, 제거할 데이터의 수, 추가할 데이터 를 파라미터로 지정 : splice(시작인덱스, 제거할 데이터 수, "추가할 데이터");
            위 예제의 경우 colors 배열에서 0인덱스부터 2개의 데이터를 제거(잘라냄), 추가할 데이터는 없음
            단독으로 사용하면 blue, green 삭제
            새로운 변수 splicecolors에 colors배열에서 0인덱스부터 데이터 2개를 잘라내어 삽입
        */

        const newColors = colors.join("-");
        console.log("join(): " , newColors);
        // 파라미터로 지정한 구분자로 배열 요소들을 합쳐서 리턴함, 구분자를 생략하면 콤마로 구분
    }
}

window.onload=()=> {
    new test();
}