// 자바스크립트 예제 2-5-4 = Set 기본 예제

class test{
    constructor(){
        const set = new Set();
        // set 변수 선언

        set.add("HongGilDong");
        set.add("KimSaRang");
        set.add("KangDongSu");
        // 값 추가

        console.log("## Original Set : forEach");
        set.forEach((value) => console.log(value));

        console.log("## Original Set : for-of");
        for(let item of set){
            console.log(item);
        }

        set.delete("KangDongSu");
        console.log("## After delete KangDongSu has : " + set.has('KnagDongSu'));


        console.log("## new Array from Set");
        let arr = Array.from(set);
        console.log(arr);
    }
}

window.onload=()=>{
    new test();
}