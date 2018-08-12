import LinkedListNode from './LinkedListNode';
// 形成链表？ 结点链起来？
// 数据集合从开始到结束显示出来
// [] next 
// head 
//     next 
//     .....
// tail
//链表有头跟尾 初始化的时候 new 一下得到一个
export default class LinkList{
    constructor (){
        this.head = null;
        this.tail = null;
    }
    //把树的节点遍历出来得到数组 数组 .join 拿到值
    toArray(){
        const nodes = [];
        let currentNode = this.head;
        //遍历出来 从head开始 push就是把结点push进去
        while(currentNode){
            nodes.push(currentNode);
            currentNode =currentNode.next;
        }
        return nodes;
    }
    //返回链表所有的value集合 map toString() 得到value值 
    //map 将节点数组变成值的数组   每个节点都有toString方法 返回value  callback 失传的对value进行一定的操作 数组是 object 由toString方法
   append(value){
    const newNode = new LinkedListNode(value);
    // {value,next}
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        // return;
        return this; //支持链式调用 一下可以append 很多个
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
    // 线性表在tail上挂节点
    // 1.空的 head为空
    // 2.非空 tail .next null

   }
   prepend(value){
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if(!this.tail) {
      this.tail = newNode
      return this
    }
    // newNode.next = this.head
    return this

   }
   //单项链表
   delete(value){
       if(!this.head){
           return null;
       }
       //拿到删除的节点
       let deletedNode = null;
       //判断头节点是否是我们要删除的   头结点存在 值为value
       while(this.head && this.head.value === value){
        //头结点的下一个节点为头结点
        
        deletedNode = this.head
        this.head = this.head.next
      }
      let currentNode = this.head
      if(currentNode !== null ) {
        while(currentNode.next) {
          if( currentNode.next.value === value ) {
            deletedNode = currentNode.next
            currentNode.next = deletedNode.next
          } else {
            currentNode = currentNode.next
          }
        }
      }
      if(this.tail.value === value) {
        this.tail = currentNode
      }
      return deletedNode
  
   }

   //es6默认值 undefined 
   find({value = undefined, callback= undefined}){
       if(!this.head){
           return null;
       }
       let currentNode = this.head;

       while (currentNode) {
         if (callback && callback(currentNode.value)) {
           return currentNode;
         }
   
         if (value !== undefined && currentNode.value ===  value) {
           return currentNode;
         }
   
         currentNode = currentNode.next;
       }
   
       return null;
     }
   
    toString(callback){
    return this.toArray().map(node=>node.toString(callback)).toString()
   }
}
