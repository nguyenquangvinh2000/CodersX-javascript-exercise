function factorials(number) {
    var sum = 1
    var i = 1
    while(i<=number){
        sum*=i
        i++
        
    }
    return sum
    var result = number
    if(number === 0|| number === 1){
        return 1
    }
    while(number>1){
        number--
        result *= number
        
    }
    return result
  }