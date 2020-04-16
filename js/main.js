'use strict';
//
// var a = 5;
// let b = 10;
// const c = 15;

// window.addEventListener('load',function(){
// setTimeout(()=>{
//     let one = document.getElementsByClassName('one')[0];
//     one.textContent = 'Mouse is mooving';
// },3000);
// });
// document.addEventListener("DOMContentLoaded", function(event) {
//     console.log("DOM fully loaded and parsed");
// });
//
// console.dir(window);
// console.dir(document);
// // console.log(d);
// console.log(foo(5));

// function one() {
//     two();
// }
// function two() {
//     three();
// }function three() {
//     console.log("Hello world!");
// }
// one();

// let x;
// function test() {
//     console.log(x);
//     x = 5;
//  return function () {
//      console.log(x);
//      x = 10;
//         return x;
//     }
// }
//
// test();
// test()();

// function newOne(value,moreValue=100) {
//     console.log(value, moreValue);
// }
//
// newOne(15);

// let button = document.getElementsByClassName('button')[0];
// button.addEventListener('click',()=>{
//     console.log("Hello");
// });
// button.addEventListener('click',()=>{
//     console.log("my friend");
// });
// button.addEventListener('click',()=>{
//     console.log("Vasya!");
// });

// function f(){
//     var o = {};
//     var o2 = {};
//     o.a = o2; // o ссылается на o2
//     o2.a = o; // o2 ссылается на o
//
//     return "azerty";
// }
//
// console.log(f());

// function testing() {
//     let value = 10;
// function result(){
// return value + 40;
//     }
//     return result();
// }
//
// console.log(testing());

// let arr = [function test () {
//     console.log("Hi!");
// },15];
// arr[0]();

// let arrr = [5,10,15];
// function foo(...arrr) {
// // return arrr.reduce((sum,value)=>sum + value,0);
//     console.log(arrr);
// }
//
// console.log(foo(4,5,6));

// let arrr0 = [5,10,15];
// let arrr1 = [5,10,15];
// let arrrTotal = [...arrr0,...arrr1];
// console.log(arrrTotal);

// let filter = [1,5,10,15,20].filter((value) => value>=10);
// console.log(filter);

// function fo(x,y,inside) {
//     console.log(x);
//     console.log(y);
//     inside();
// }
// function inside(){
//     console.log("Inside!");
// }
//
// fo(5, 10,inside);

// var test = 5;
// let test = 10;
// console.log(test);


// let names = [`Vasya`,`Denis`,`Alex`,`Marina`];
// let objects = [{name:'Peter',surname:'Santanello'},{name:'Alex',surname:'Samsonkin'}];
// function result(names,callback) {
//     let innerRes = [];
//     for (let i=0;i<names.length;i++){
//         innerRes.push(callback(names[i]));
//     }
//     return innerRes;
// }
//
// function getNamesToLowerCase(value) {
// return value.toLowerCase();
// }
//
// console.log(result(names, getNamesToLowerCase));
//
// let map = objects.map((value,index) => {
//     return `My friend is ${value.surname}`;
// });
// console.log(map);

// let objectsNames = [{name:'Peter',surname:'Santanello'},{name:'Alex',surname:'Samsonkin'}];
// for(let value of objectsNames){
//     console.log(value.name);
// }

// function outer(name) {
// return function inner(surname) {
// return `My name is ${name} and my surname is ${surname}`;
// }
// }
// let res = outer('Michael');
// console.dir(res);

// function func() {
// let x = 7;
// return x;
// }
// function funcNew() {
// let y = 10;
// return y;
// }
// let res = function funcNew() {
// let y = 10;
// return y;
// };
//
// console.dir(func);
// console.dir(funcNew);

// let b = 2;
//
// function f(a) {
// console.log(a+b);
//
// }
// function g() {
//     let b = 4;
//     f(1);
// }
//
// console.log(g());

// let x = null+1;
// console.log(x);
// console.log(typeof x);
// console.log(Boolean(0));

// let ob = {
//     one:1,
//     two:2,
//     [Symbol.for('disc')]:'Hello',
// };
// let link = 'one';
// console.log(ob[Symbol.for('disc')]);

// let obb = {
//   baz(){
//       console.log('Hello!');
//   },
//     func:function () {
// console.log("Wow!");
//     }
// };
// let obb1 = obb.baz;
// obb1();





