class RBA{
    roi(){
        return 5.5;
    }
}

class HDFC extends RBA{
    roi(){
        return 8.1;
    }
}

class ICICI extends RBA{
    roi(){
        return 8.3;
    }
}

obj = new ICICI();
console.log(obj.roi());

obj1 = new HDFC();
console.log(obj1.roi());