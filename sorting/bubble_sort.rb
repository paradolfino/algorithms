def bubble_sort(arr)
   i = arr.length - 1
   while i >= 0 do
    j = 1
    while j <= i do
        if arr[j-1] > arr[j]
            temp = arr[j-1]
            arr[j-1] = arr[j]
            arr[j] = temp
        end
        j += 1
    end
    i -= 1
    
   end
   return arr
end