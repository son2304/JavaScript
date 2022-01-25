// 자바스크립트 예제 3-1 = 이벤트 핸들러

class test{
    constructor(){

        function btnClick(event){
            alert(event.target.value+" 클릭됨!!");
        }
        
        document.getElementById('b2').onclick = function(event){
            alert(event.target.value + " 클릭됨!!");
        }
    }
}

window.onload=()=>{
    new test();
}