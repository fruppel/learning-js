// maths.js

// This function gets included
function cube ( x ) {
	// rewrite this as `square( x ) * x`
	// and see what happens!
	return x * x * x;
}

var Task = function Task(name) {
	this.name = name;
};
	
Task.prototype.toString = function toString () {
	return 'Task: ' + this.name;
};

/* TREE-SHAKING */

console.log( cube( 5 ) ); // 125

var task = new Task('Lorem ipsum');
console.log(task.toString());
