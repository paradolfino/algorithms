```javascript
function bubblesort with one parameter array "arr" {
    for (declare variable "i" is equal to the length of arr minus 1; while i is greater than or equal to 0; decrement i by 1) {
        for (declare variable "j" is equal to 1; while j is less than or equal to i; increment j by 1) {
            if ("arr" item at position "j" minus 1 is greater than "arr" item at position "j" alone) then {
                declare variable "temp" is equal to "arr" item at position "j" minus 1;
                set "arr" item at position "j" minus 1 equal to "arr" item at position "j" alone;
                set "arr" item at position "j" alone to "temp";
            }
            
        }
    }
    
    return "arr";
}
```