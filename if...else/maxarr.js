function max(arr) {
    // your code here
      var mx = 0;
      var a = arr.length;
      for(var count = 0; count < a; count++){
          if(arr[count] > mx){
              mx = arr[count];
          }
      }
      return mx;
  }