// 堆排序

// 分治的思想 分而治之
    // 1.快排 随机选择数组中的一个数A, 基准 中点
    // 2.其他数字跟它比较,小于它的放左边,大于他的放右边
    // 3.递归的思想,将左边的数和右边的数重做以上两步

    // a b c
    // a.concat(b).concat(c)

// 三种复杂排序
    // 归并排序
    // 快排
    // 堆排序
// 执行效率
// 快速排序
// log2(n) 切的次数  for 循环n次 
// N*logN 时间复杂度 复杂排序 归并 快排 堆排
// 简单算法  冒泡 选择 插入  N*N 时间复杂度
const arr = [85,24,63,45,17,31,96,50]; 
function quickSort(arr){
    //退出条件 完成递归要退出
    if(arr.length<=1){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length/2);//Math.floor得到整数  基准点
    // 基准点是提前排好了顺序的
    // let pivot = arr[pivotIndex];
    //splice 得到的是一个数组  pivotIndex 且的起始位置  1切一个 [0]拿出数组的第一个 
    //基准点都要从这个数组里面拿出来
    let pivot = arr.splice(pivotIndex,1)[0]
    let left = [];
    let right = [];
    for(let i = 0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);//其实还是乱的
        }else{
            right.push(arr[i]);
        }
    }
return quickSort(left).concat([pivot],quickSort(right));
}
console.log(quickSort(arr))
