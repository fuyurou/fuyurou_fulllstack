// 选择排序  时间复杂度 N*N
// 找到数组中最小的值放在第一位,第二小的放在第二，.....
// 坑 基址查找
const arr = [85,24,63,45,17,31,96,50]; 
function selectionSort(arr){
    let len = arr.length;
    for (let i = 0; i<len;i++){
        let min = i;//声明一个最小的找到比这更小的赋值
        //如果已经选择了，就一下是有序的 i-j数已经有序
        // min的值会改
        for(let j=i;j<len;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min !== i){
            [arr[min],arr[i]] = [arr[i],arr[min]];//解构兑换位置
        }
    }
   
    return arr;
} 
console.log(selectionSort(arr));