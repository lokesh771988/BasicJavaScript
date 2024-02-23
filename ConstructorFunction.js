/*function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Person("Testing", "Demo");
let person1 = new Person("Testing1", "Demo1");

console.log(person.firstName);
console.log(person1.firstName);
*/
function Person(firstName, lastName){
    //console.log(new.target);
    if(!new.target){
        return new Person(firstName, lastName);
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function (){
        return this.firstName+ "  "+this.lastName;
    }
}

let person = Person("Testing", "Demo");
console.log(person.firstName);