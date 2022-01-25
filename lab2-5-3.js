// 자바스크립트 예제 2-5-3 = Map 기본 예제

class test{
    constructor(){
        const map = new Map();
        map.set("2019101","HongGilDong");
        map.set("2019102","KimSaRang");
        map.set("2019103","KandDongSu");

        console.log("### Original data: forEach with Arrow")
        map.forEach((value, key) => console.log(key, value));
        // *실행 방식 찾아볼것

        console.log("### Original data: for-of")
        for(let item of map ) {
            console.log(item[0],item[1]);
        }
        // item[0] = key값, item[1] = value값

        console.log("### Original data: for-of with key, map")
        for(let [key, value] of map ) {
            console.log(key,value);
        }
        // key, value값을 받아옴

        console.log("### Original data: map.keys()")
        const keys = map.keys();
        for(let key of keys) {
            console.log(key, map.get(key));
        }
        // key값을 받아와서 map.get함수로 value값 출력

        console.log("### Map functions")
        console.log("get 201901: " + map.get("2019101"));
        // get(key) 함수로 key값이 2019101의 value값을 반환

        map.delete("2019103")
        // delete(key) 함수로 key값이 2019103인 데이터 삭제

        console.log("after delete 201903, has : ", map.has("2019103"));
        // has(key) 함수로 key값이 2019103인 데이터가 있는지 확인

    }
}

window.onload=()=>{
    new test();
}