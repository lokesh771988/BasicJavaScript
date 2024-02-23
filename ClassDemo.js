class DemoClass{
    /*details(id, sname){
        this.id = id;
        this.sname = sname;
    }*/
    constructor(id, sname){
        this.id = id;
        this.sname = sname;
    }
    display(){
        console.log(this.id, this.sname);
    }
}

let obj = new DemoClass(1, 'Testing');
//obj.details(1, 'testing');
obj.display();
//obj.details(2, 'Demo');
let obj1 = new DemoClass(2, 'Demo');
obj1.display();