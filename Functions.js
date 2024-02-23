/*//with parameter
function add(){ //creating function
    console.log("Hello");
}

//add(); //calling function

function add(a, b){
    console.log(a + b);
}

add(5, 10);

function add(a, b){
    return (a + b);
}

let sum = add(5, 10);
console.log(sum)
*/

let add = (x, y) => x + y;

console.log(add(10, 5)); //15