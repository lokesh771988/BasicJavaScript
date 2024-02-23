class DemoSuper{
    constructor(value){
        this.value = value;
    }
    display(){
        console.log(this.value);
    }
}

class DemoSuper1 extends DemoSuper{
    constructor(value, value1){
        super(value);
        this.value1 = value1;
    }

    display1(){
        console.log(this.value1);
    }
}

obj = new DemoSuper1(10, 5);
obj.display();
obj.display1();