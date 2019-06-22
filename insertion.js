/**
 * 找到数组最小的元素，将它和数组的第一个元素交换位置，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置，重复步骤
 */
const arr = [2, 4, 1, 3];
function insertionSort(arr) {
    const originalArr = [...arr];
    for (let i = 0; i < originalArr.length; i++) {
        let currentIndex = i;
        while (originalArr[currentIndex - 1] !== undefined && originalArr[currentIndex] < originalArr[currentIndex - 1]) {
            [originalArr[currentIndex], originalArr[currentIndex - 1]] = [originalArr[currentIndex - 1], originalArr[currentIndex]];
            currentIndex--; // 与之前的元素比较
        }
    }
    return originalArr;
}

console.log(insertionSort(arr));
