def selection_sort(arr)
    minIdx = 0
    len = arr.length
    i = 0
    while i < len
        minIdx = i
        j = i + 1
        while j < len
            if arr[minIdx] > arr[j]
               minIdx = j 
            end
            j += 1
        end
        temp = arr[minIdx]
        arr[minIdx] = arr[i]
        arr[i] = temp
        i += 1
    end
    return arr
end