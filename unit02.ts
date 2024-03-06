const title = "Welcome to Kaohsiung Fruit Stand";
console.log("title")
console.log(typeof(title));

const fruit={
    name:"Cherry",
    no:1,
    price:300,
    qty:5,
    category:"美國櫻桃",
    origin:["美國","加拿大"]
}

console.log("水果名稱",fruit.name)
console.log("水果編號",fruit.no)
console.log("水果價格",fruit.price)
console.log("訂購數量",fruit.qty)
console.log("水果種類",fruit.category)
console.log("水果產地",fruit.origin)



interface Product {
    name:string,
    no:number,
    price:number,
    qty:number,
    category:string,
    origin:object
}

const myProduct:Product={
    name:"mango",
    no:2,
    price:199,
    qty:5,
    category:"愛文",
    origin:["屏東","台南"]
}

console.log("hr")
console.log("水果名稱",myProduct.name)
console.log("水果編號",myProduct.no)
console.log("水果價格",myProduct.price)
console.log("訂購數量",myProduct.qty)
console.log("水果種類",myProduct.category)
console.log("水果產地",myProduct.origin)

//npm install -g tsc-node
//ts-node unit02.ts

//npm install -g typescript ts-node
//tsc unit02.ts
//node unit02.ts

class MyFruit {
    name:string;
    no:number;
    price:number;
    qty:number;
    category:string;
    origin:string[];

    constructor( no:number,name:string,     price:number,qty:number,   category:string,  origin:string[]){
        this.no = no;
        this.name =name;
        this.price =price;
        this.qty=qty;
        this.category =category;
        this.origin =origin;
    }
    showInfo(){
        console.log(this.no )
        console.log(this.name)
        console.log(this.price )
        console.log(this.qty)
        console.log(this.category )
        console.log(this.origin )
    }
    getInfo(){
        return "編號: " + this.no +" <br>"
            +  "品名: " + this.name+" <br>"
            +"價格: " + this.price +" <br>"
            +"數量: " + this.qty+" <br>"
            +"類別: " + this.category + " <br>"
            +"產地: " + this.origin +" <br>"
    }

    getNo(){
        return this.no;
        
    }
    getName(){
        return this.name;

    }
    getPrice(){
        return this.price;

    }
    setNo(no:number){
        this.no = no;
    }
    setName(name:string){
        this.name = name;
    }
    setPrice(price:number){
        this.price = price;
    }

    static setTitle(title:string){
        return title;
    }
}

console.log("---------物件實體---------------------------------")
const myfruit= new MyFruit(1, "Apple", 100 ,5 ,"富士山" ,["日本"]);
myfruit.showInfo();

console.log("---------------------------------------------------")
let yourfruit:MyFruit=new MyFruit(2,"Banana",95,6,"台農香蕉",["高雄","南投"])
yourfruit.showInfo();   

console.log(myfruit.getInfo())

console.log("我訂購的品項是: " , myfruit.getName());
myfruit.setName("蘋果")
console.log("我訂購的品項是: " , myfruit.getName());

console.log(MyFruit.setTitle("歡迎來到港都水果攤"))
