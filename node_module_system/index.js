var Mouse = require('./mouse')
var Cat = require('./cat')

function Cat(){
	this.stomach = [];
};

Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
	mouse.die();
}
var Mickey = new Mouse('black');
var jerry = new Mouse('orange');

console.log(Mickey);
console.log(jerry);

var tom = new Cat();
tom.eat(Mickey);
tom.eat(jerry);
console.log(tom);


