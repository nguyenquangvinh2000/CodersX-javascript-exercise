/**
 * Tạo một đối tượng student gồm các property name, sex, age
 * Example:
  name: "CodersX",
  sex: "Male",
  age: 1
 * Viết hàm showInfo trả về object đó
*/

var student = {
    name: "CodersX",
    sex: "Male",
    age: 1,
};

function showInfo(obj) {
    var student1 = new student();
    console.log(student1.name);
    console.log(student1.sex);
    console.log(student1.age);

}

