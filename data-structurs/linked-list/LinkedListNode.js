export default class LinkListNode {
    // data collections data node
    // linked  指针
    // list  数据集合
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
//toString 得到值
    toString(callback){
        return callback?callback(this.value):`${this.value}`;
    }
}

// 链表节点
// [] 数组是内存分配给我们一定数量的空间
// 存储空间的连续性问题 灵活性不够 指针
// a[10] = [1, 2, 3, 4, 5, 6, 7, 8];
// 1 1001
// 1.next  指针，next指向下一个结点的位置
// 101 10002