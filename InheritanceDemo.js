class A{
    a = 10;
    display(){
        console.log("A ",this.a);
    }
}

class B extends A{
    b = 5;
    show(){
        console.log("B ", this.b);
        console.log("A Parent Value ", this.a);
    }
}

//obj = new B();
//obj.display();
//obj.show();

obj1 = new A();
obj1.show();