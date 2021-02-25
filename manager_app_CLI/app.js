var readlineSync = require('readline-sync');
var fs = require('fs');

var contacts = [];
function loadData(){
  var fileContent = fs.readFileSync('./data.json');
  contacts = JSON.parse(fileContent);
}
function showMenu(){
  console.log('1. show all contact');
  console.log('2. add new contact');
  console.log('3. save and exit');
  var choose = readlineSync.question('> ');
  switch (choose) {
    case '1':
      showAllContact();
      showMenu();
      break;
    case '2':
      createNewContact();
      showMenu();
      break;
    case '3':
      saveAndExit();
      break;
    default:
      console.log('wrong option');
      showMenu();
      break;

  }

}
function showAllContact(){
  for(var contact of contacts){
    console.log(conacts.name, contacts.age);
  }
}
function  createNewContact(){
  var name = readlineSync.question('name: ');
  var age = readlineSync.question('age: ');

  var contact = {
    name: name,
    age: parseInt(age)
  };
  contacts.push(contact);


}
function saveAndExit(){
  var content = JSON.stringify(contacts);
  fs.writeFileSync('./data.json',content, {encoding: 'utf8'});
}
function main(){
  loadData();
  console.log(contacts);
  showMenu();
}
main();
