/*let person = {
    firstName: 'lokesh',
    lastName: 'gorantla'
}
*/
//console.log(person["firstName"]);
//console.log(person.lastName);
//person["age"] = 26;
//person.age = 26;
//console.log(person.age);
//person.age = 30;
//console.log(person.age);

//delete person.age;
//console.log(person.age); 

//for/in loop

/*for(let a in person){
    //console.log(a);
    console.log("lable Name:  "+a+ "   label value :: "+ person[a]);
}
*/
let person = {
    firstName: 'lokesh',
    lastName: 'gorantla',
    age: 30,
    fullName: function full(){
        return this.firstName + "  "+this.lastName;
    },
    companyName: function comapny(){
        console.log("Wipro");
    }
}

//console.log(person.fullName());
person.companyName();