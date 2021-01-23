var fs = require('fs');
const { Stream } = require('stream');

var text = fs.readFileSync('./text.txt',{encoding:'utf-8'});

console.log(text);

fs.writeFileSync('./text-2.txt','Iam vinh');

