/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */

var axios = require('axios')

function loadData(link){
    return new Promise(function(resolve,reject){
        axios.get(link).then(function(err,reponse){
            if(!err==null){
                resolve(reponse.data)
            }else{
                reject(err)
            }
        })
    })
}

Promise.all([
    loadData('https://jsonplaceholder.typicode.com/todos/1'),
    loadData('https://jsonplaceholder.typicode.com/todos/2'),
    loadData('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err)
})