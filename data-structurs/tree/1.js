//创建树节点的一个类  有自身的值 对子节点的一个引用
class TreeNode {
    constructor(value){
        this.value = value;
        this.descendents = [];
    }
}
//五个节点的值
const abe = new TreeNode('abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendents.push(homer);
homer.descendents(bart,lisa,maggie);


