class Employee{
    constructor(){
        let name, salary;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }
    getSalary(){
        return this.salary;
    }

    setSalary(salary){
        this.salary=salary;
    }
}

obj = new Employee();
obj.setName("lokesh");
console.log(obj.getName());
obj.setSalary(5000);
console.log(obj.getSalary());