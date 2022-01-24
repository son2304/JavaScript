// 자바 스크립트 예제 2-3 = 출력문 사용 예제

class test{
    constructor(){
        var name = 'HongGilDong';

        document.getElementById("result").innerHTML = name;
        // html에서 id가 result인 태그를 찾아서 name변수 출력

        alert(name);
        // 작은 박스(경고창)에 name변수 출력

        console.log(name);
        // console창에 name변수 출력 = F12눌러서 확인

    }
}

window.onload = () => {
    new test();
}