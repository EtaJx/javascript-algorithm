/**
 * 数组中有n个元素，比较每相邻两个元素，如果前者大于后者，就把两个数交换位置
 */
const arr = [2, 4, 1, 3];
function bubbleSort(arr) {
  const max = arr.length - 1;
  for (var a = 0; a < max; a++) {
    let done = true;
    for (var i = 0; i < max - a; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}

// 测试
console.log(bubbleSort(arr));