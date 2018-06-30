**Name**: Sorted, Summed, Array of Unique Multiples Returned as JSON

**Problem**:

Given numbers x and y, what is the sum of a ascending sorted array of their unique multiples below a certain max number? Return the sorted array, the sum, and the length of the array as JSON.

**Solution**:

```javascript
function sortedMultiplesWithSum(x, y, max) {
  var arr = [];
  var len, temp, json;
  for (var i = 1; i < max; i++) {
      
    x * i < max && arr.includes(x * i) == false ? arr.push(x*i) : null;
    y * i < max ? arr.push(y*i) : null;
    
  }
  len = arr.length;
  for (var i = len - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
      if (arr[j-1] > arr[j]) {
        temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  json = {
    length: arr.length,
    sum: arr.reduce((acc, cur)=>{
      return acc + cur;
    }),
    array: arr
  }
  
  return json;
}

sortedMultiplesWithSum(3, 5, 1000);

```