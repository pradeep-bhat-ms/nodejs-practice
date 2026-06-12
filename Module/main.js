// let addfn=require('./add.js');
// console.log(addfn.add(10,20));
// console.log(addfn.sub(20,10));
// it is coommonjs module  use require to import 

// import {add,sub} from './add.js';
// console.log(sub(10,20));
// console.log(add(20,10));

// // it is es6 module use import 


// let grt=require('./greeting.js');
// console.log(grt.gm());
// console.log(grt.gn());


// import {gn, gm} from './greeting.js';
// console.log(gm());
// console.log(gn());


// let obj=require('./name.js')
// console.log(obj.name)
// console.log(obj.age);
// console.log(obj.id);

// import {obj} from './name.js'
// console.log(obj.age);
// console.log(obj.id);
// console.log(obj.name);

// let name=require ('./name1.js')
// let age=require('./age1.js')

// console.log(`name is ${name.name} and age is ${age.age}`);

import { name } from './name1.js';
import { age } from './age1.js';

console.log(`name is ${name.name} and age is ${age.age}`);