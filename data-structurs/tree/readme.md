element  有自己的值
子节点  递归的概念 



 前端 
 Map,Set 基于树，树是特殊的链表 

 HTML DOM  树

 react vnode dom diff 两个都是树  标签 属性 子节点 

 root 可以有 children 



 中序遍历  
 二叉树
    最多两个节点，左子树，右子树
 root 根
    完美二叉树 k 叶节点 2^(k-1)
    总结点树是  2^k-1

特例： 二叉搜索树 BAT(Binary Search Tree)  查找元素块 每个最小树满足一下定义  父节点的值天生比左子树大  
1. 二叉树 
2. 左子节点小于父节点小于右子节点 

搜索 
BST 节点的插入
1. 如果树中没有任何节点， 根节点，
2. 如果节点比树的根节点或树的节点，值更大，则放在右子树，反之则放在左子树。
3. 重复第二操作，直至找到空位插入新节点。

BST遍历 有三种形式

1. 中序遍历
    以最小到最大的顺序访问所有节点
    递归解决中序遍历
2. 先序遍历
    祖先节点优先于后代节点的顺序遍历   先输出父节点在输出后代节点
3. 后序遍历
    先访问节点的后代节点，再访问节点本身