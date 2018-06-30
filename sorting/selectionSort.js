function selectionSort(arr) {
    var len, minIdx, temp;
    len = arr.length;
    for (var i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i+1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;

    }
    return arr;
}

