// 3-3-1 ========================================
var ary1 = ['佐藤', '山田', '長田'];
var ary2 = ['I', 'my', 'me'];
console.log(ary.length);
console.log(ary.toString());
console.log(ary1.concat(ary2));

// スタック
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.pop());

// キュー
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.shift());

// map
var data = [2, 3, 4, 5];
var result = data.map(function(value){
    return value * value
});
console.log(result);

// some
var data = [4, 9, 16, 25];
var result = data.some(function(value){
    return value % 3 == 0;
});
if (result){
    console.log('ok x3');
}else{
    console.log('not x3');
}

// filter
var result = data.filter(function(value){return value % 2 === 1;});
console.log(result);

// sort
var ary = [5, 10, 25];
console.log(ary.sort());
console.log(ary.sort(function(x, y){
    return x - y;
}));

// sort_clazz
var classes = ['社長', '部長', '主任', '担当']
var nember = [
    {name:'aaa', clazz:'社長'},
    {name:'ddd', clazz:'担当'},
    {name:'bbb', clazz:'部長'},
    {name:'ccc', clazz:'主任'},
];
console.log(nember.sort(function(x,y){
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));

// 3-3-2 ========================================
let m = new Map([['dog', 'bow'],['cat', 'nan'],['mouse','chu']]);
for(let key of m.keys()){
    console.log(key);
};
for(let value of m.values()){
    console.log(value);
};
m.delete('dog');
m.clear();

// 3-3-3 ========================================
let m = new Set([10, 5, 100, 50, 5]);
console.log(m.has(100));
console.log(m.size);

