/* TREE-SHAKING */
import { cube } from './maths.js';
import Task from './Task';

console.log( cube( 5 ) ); // 125

const task = new Task('Lorem ipsum');
console.log(task.toString());