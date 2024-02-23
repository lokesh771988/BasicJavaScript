let result = 0;
const add = (x, y) => x + y;
try{
    result = add(2, 4);
}catch(e){
    console.log(e.name, e.message);
}finally{
    console.log(result);
}

