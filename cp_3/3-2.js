// 3-2-2
var n = '123';
console.log(Number(n));
console.log(Number.parseFloat(n));

// 3-2-3
let sym1 = Symbol('sym'); 
let sym2 = Symbol('sym');

console.log(typeof sym1);

console.log(sym1.toString());
console.log(sym1 === sym2);

// 3-2-4
console.log(Math.abs(-100));
console.log(Math.clz32(1));
console.log(Math.min(20, 40, 60));
console.log(Math.max(20, 40, 60));

console.log(Math.random());
