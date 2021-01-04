/**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

function removeDuplicate(array) {
    // write code here...
    var newArr =[]
    return array.filter(function(x){
       if(newArr.indexOf(x)==-1){
           newArr.push(x);
           return true;
       } 
       return false;
    });
  }