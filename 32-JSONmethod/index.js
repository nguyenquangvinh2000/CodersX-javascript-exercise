/**
 * 1. Sử dụng module fs để đọc file `data.json`
 * 2. Dùng JSON.parse để chuyển đổi string đọc được ở bước 1 sang Object
 * 3. Log property `name` từ object ở bước 2
 * 4. Thêm 1 property `members` là một array, truyền vào 1 object mô tả về bạn
 * 5. Ghi lại dữ liệu vào file data.json
 * 6. Mở file data.json để kiểm chứng xem bạn làm đúng không
 */
var fs = require('fs');
var readfile = fs.readFileSync('./data.json',{encoding: 'utf-8'});
console.log(readfile);
var readSring = JSON.parse(readfile);

readSring.push({
    members : ['vinh',20,'nghe an']
})
console.log(readSring)
var write = fs.writeFileSync('./readString',readSring);
console.log(readSring);

