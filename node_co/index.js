/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

 var urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3',
    'https://jsonplaceholder.typicode.com/todos/4',
    'https://jsonplaceholder.typicode.com/todos/5'
  ];
  
  // Cách 1: Sử dụng vòng lặp for
  
  // Cách 2: Sử dụng array.map
  // Gợi ý: Có thể yield 1 array các Promise

  
var axios = require('axios')
var co = require('co')

function getLinkPromise(link){
    return new Promise(function(resolve,reject){
        axios.get(link,function(err, data){
            if(link == null){
                reject(err)
            }else{
                resolve(data);
            } 
        })
    })
}

var getLink = co.wrap(function*(links){
    var values = yield links.map(function(link){
        return getLinkPromise(link)
    })
})

getLink(urls)
    .then(function(values){
        console.log(values)
    })
    .catch(function(err){
        console.log(err)
    })
