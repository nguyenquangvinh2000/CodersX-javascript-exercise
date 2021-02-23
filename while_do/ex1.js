function sum(x){
    var i = 1; 
    var s = 0;
    do{
        if(i % 2 !== 0){
            s = s + i;
            i += 2;
        }
    }
    while(i<x){
        return s;
    }
}