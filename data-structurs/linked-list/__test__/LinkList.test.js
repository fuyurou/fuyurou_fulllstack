//一个类一个测试文件
import LinkedList from '../LinkedList';

//描述测试用例
describe('LinkList',()=>{
    it('should create empty linked list',()=>{
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    });
    //添加结点
    it('should append node to linked list',()=>{
        const linkedList = new LinkedList();
        //初始化为空   测试驱动开发
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        // linkedList.append(1);
        // linkedList.append(2);
        // 链式调用
        linkedList
            .append(1)
            .append(2)
            .append(3)

        expect(linkedList.toString()).toBe('1,2,3');
    });

    //在头部加一个节点
    it('should prepend node to linked list',()=>{
        const linkedList = new LinkedList();
        linkedList
            .append(1)
            .append(3);
        expect(linkedList.head.toString()).toBe('1');
        expect(linkedList.tail.toString()).toBe('3');
        linkedList.prepend(2);
        expect(linkedList.toString()).toBe('2,1,3');
    });
    it('should delete node by value from linked list',()=>{
        // 如何删除？ 前一个结点的next 前一个结点的next.next
        const linkedList = new LinkedList()
        expect(linkedList.delete(5)).toBeNull()
        linkedList
            .append(1)
            .append(1)
            .append(2)
            .append(3)
            .append(3)
            .append(3)
            .append(4)
            .append(5)
        
            expect(linkedList.head.toString()).toBe('1');
            expect(linkedList.tail.toString()).toBe('5');

            const deletedNode = linkedList.delete(3);
            //返回删除的节点证明删除了3这个结点
            expect(deletedNode.value).toBe(3);
            expect(linkedList.toString()).toBe('1,1,2,4,5');
            //delete遍历

    });
    it ('shold find node by value', () => {
        const linkedList = new LinkedList();
    
        expect(linkedList.find({ value: 5 })).toBeNull();
    
        linkedList
          .append(1)
          .append(2)
          .append(3)
        
        const node = linkedList.find({ value: 2 });
        expect(node.value).toBe(2);
        expect(linkedList.find({value: 5})).toBeNull();
    
      })
 
    

})