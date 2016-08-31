//es6
//'use strict'//使用严格模式。

//let 声明的变量只会在自己大括号里 运行


// function f1(){
//     let n = 5;
//   if(true){
//     let n = 10;
//   };
//   console.log(n)
// }
// f1()//输出 n = 5.
//
//
// function f2(){
//   var x = 2;
//   if(true){
//     var x = 3;
//   }
//   console.log(x)
// }
// f2()//输出x = 3.

//下例中let被翻译成var. label中的小bug 。可以在label在线编译中查证。
// if(true){
//   let name = 'zfpx';
// }
// console.log(name);// ReferenceError: name is not defined

// for (let i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (let i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// }

// for (var i = 0; i < 3; i++) {
//   console.log("out", i);
//   for (var i = 0; i < 2; i++) {
//     console.log("in", i);
//   }
// };

//
// var [x,y]=getVal(),//函数返回值的解构
//     [name,,age]=['郝航宙','male','20'];//数组解构
//
// function getVal() {
//     return [ 1, 2 ];
// }
// console.log('name:' + x,'age:' + y  );
// console.log('name:' + name,'age:' + age  );


// function add(x,y){
//   var s = x*y;
//   console.log(s)
// }
// add(3,4);
//
// function add(x,y){
//   let s = x*y;
//   console.log(s)
// }
// add(3,4);

//let add = (x = 10,y = 2) =>console.log(x + y);


function Point(x,y){
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
}
var point = new Point(6,3);
console.log(point.toString());//(6,3)
