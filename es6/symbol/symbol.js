// // symbol js 的基础数据类型之一
// // 为js 带来唯一值,不会重复
// var s =Symbol();
// console.log(typeof s);
// var s1 = Symbol();
// console.log(s==s1);
// // console.log(new Symbol());

// var s1=Symbol('foo');
// var s2=Symbol('bar');
// console.log(s1);
// var sym=Symbol('My symbol');
// console.log(sym);
// console.log( typeof sym);
// console.log(String(sym));    w
// console.log(String(sym)==sym);
// var str='123';
// var str2 =new String("123");
// console.log(str);
// console.log(String(str2));

// var mySymbol=Symbol();
// var a={
//     "delay":1000,
//     "delay":2000,
//     [mySymbol]:'Hello!'
// }
// var sym=Symbol();
// a[sym]={value:'您好'}
// // console.log(a);
// // console.log(a[mySymbol]);
// for(key in a){
//     console.log(key,a[key]);
// }
// const objectSymbols=Object.getOwnPropertySymbols(a);
// console.log(objectSymbols);

