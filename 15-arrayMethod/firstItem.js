/** 
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/

function first(arr, n) {
    var result = arr.slice()
    for(var i=0;i<arr.length-n;i++){
        result.pop()
        
    }
    return result
  }
  
  // console.log(first([1, 2, 3], 2)); // expect [1, 2]
  