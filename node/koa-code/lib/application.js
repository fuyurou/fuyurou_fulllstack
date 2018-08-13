// // koa 就是Application  
// //手写一个koa  

// const Emitter = require('events');
// const http = require('http');
// module.exports = class Application extends Emitter{
//     constructor(){
//         super();
//         //确保是一个事件的子类
//         // 可加元素， 有顺序
//         this.middleware = [];
//     }
//     // 中间件处理函数  中间件是函数的数组

//     use(fn){
//         if(typeof fn !== 'function'){
//             throw new TypeError('middleware must be a function');
//         }
//         //中间件填进去了  1.koa 基于http createServer  2.中间件函数加入到middleware里面  3.事件监听 每次用户来了都会将数组里面的函数挨个按顺序执行一遍  
//         this.middleware.push(fn);
//         return this;
//     }
//     callback(){
//         this.emit('error');
//         console.log('callback fro middleware')
//     }
//     listen(...args){
//         this.on('error',this.onerror)
//         const server = http.createServer(this.callback());
//         return server.listen(...args);
//     }
//     onerror(){
//         console.log('出错了')
//     }
// }
// //listen 可以传参 展开运算符..args  监听
// // callback 中间件要执行的函数  每次请求来 都会执行
// buffer 二进制流
// node模块大部分支持订阅发布者模式 天生具有listen 的能力
const Emmiter = require('events')
const http = require('http')

module.exports = class Application extends Emmiter {
  // 借助了node的原生模块 events 
  constructor () {
    super() // 执行一下 events 的构造执行一下
    // 中间件数组 可以加元素， 有顺序 中间件是函数的一个集合
    this.middleware = []
  }
  // 中间件处理函数
  use (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('middleware must be a function')
    }
    this.middleware.push(fn)
    return this
  }
  callback () {
    this.emit('error')
    console.log('callback for middleWare')
  }
  listen (...args) {
    this.on('error', this.onerror)
    
    const server = http.createServer(this.callback())
    return server.listen(...args)
  }
  onerror () {
    console.log('我是错误处理函数，你现在出错了')
  }
}

// .listen 和 addEventListener 是一个性质
