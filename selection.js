/**
 * 在数组中找到最小（大）元素，存放到数组的起始位置，再从剩下的元素中，找到最小（大）的元素，放在已排序的元素之后。
 */
const arr = [2, 4, 1, 3];
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) { // 除去本身之外的元素
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

/**
 * 测试
 */
console.log(selectionSort(arr));
