/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    // viết code ở đây.
      return arr.reduce((newobject,key) => {
          if(newobject[key]){
              key=newobject[key]++;
          }
          else newobject[key] =1;
          return newobject;
      },{});
  }
  
  