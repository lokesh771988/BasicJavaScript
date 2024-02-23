function employee(){
    this.name="lokesh";
    this.salary=5000;
}

employee.prototype.gender="male";

emp = new employee();
//emp.gender="male";
console.log(emp.name);
console.log(emp.salary);

console.log(emp.gender);

emp1 = new employee();
console.log(emp1.name);
console.log(emp1.salary);

console.log(emp1.gender);