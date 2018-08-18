const arr =[1,2,3];
const func =function(){};
// Object 来自 function(){}
// 构造函数

 console.log(Object.prototype.toString.call(arr));

const zk ={
    name:'曾凯',
    toString:function(){
        return (`${this.name}是鸠摩智大师喜欢的程序员`);
    }
}
// 序列化  "{name:曾凯 ,habit:'交友'}"
// console.log(zk.toString());
// console.log(Object.prototype.toString.call(zk));

// console.log(JSON.stringify(zk));