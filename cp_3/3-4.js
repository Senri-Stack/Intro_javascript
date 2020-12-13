// 3-4-1 ========================================
var d = new Date();
console.log(d);

// 3-4-2 ========================================
var d = new Date();
console.log(d.toLocaleString());
d.setMonth(d.getMonth()+3);
console.log(d.toLocaleString());

console.log(d.toLocaleString());
d.setMonth(d.getMonth()+3);
d.setDate(0);
console.log(d.toLocaleString());

// 3-4-3 ========================================
var d1 = new Date(2020,5,15);
var d2 = new Date(2021,6,15);
console.log( (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));