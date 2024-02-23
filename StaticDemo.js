class StaticDe{
    static alb = 10; //static variabl
    b = 20; //non-static variable

    static m(){
        console.log("static method");
    }
    m1(){
        console.log("non-static method");
    }
}

let obj = new StaticDe();
console.log(obj.alb); //undefined
console.log(StaticDe.alb);
StaticDe.m();
obj.m1();

StaticDe.alb = 25;
console.log(StaticDe.alb);