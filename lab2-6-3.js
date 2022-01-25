// 자바스크립트 예제 2-6-3 = 생성자, 클래스

class test{
    constructor(){

        function Product(name, price){
            this.name = name;
            this.price = price;
            this.getInfo = function(){
                return this.name + " , " + this.price;
            }
        }

        /*
            class Product{
                constructor(name, price){
                    this.name = name;
                    this.price = price;
                    this.getInfo = function(){
                        return this.name + " , " + this.price;
                    }
                }
            }
            
            클래스로 Product 함수를 생성하는 경우 constructor 생성자에 변수와 함수 구현
        */

        let p1 = new Product("애플 아이폰", 1000000);
        let p2 = new Product();
        p2.name = "삼성 갤럭시";
        p2.price = 1100000;

        console.log(p1.getInfo());
        console.log(p2.getInfo());
    }
}

window.onload=()=>{
    new test();
}