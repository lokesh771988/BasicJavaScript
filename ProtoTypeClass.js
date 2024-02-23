class A{
    constructor(eid, ename){
        this.eid=eid;
        this.ename=ename;
    }
    
    display(){
        console.log(this.eid, this.ename);
    }
}

A.prototype.salary = 5000;

obj = new A(1, "lokesh");
obj.display();

console.log(obj.salary);

A.prototype.show=function(){
    console.log("protoType function")
}

obj.show();