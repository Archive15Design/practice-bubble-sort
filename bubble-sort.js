
function bubbleSort(arr) {
    let noSwap = true;

    // Iterate through the array
    for (let i = 0; i < arr.length; i++){
      let current = arr[i];
      let next = arr[i+1];

      // If the current value is greater than its neighbor to the right
      if (current > next) {
        // Swap those values
        // Do not move this console.log
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        console.log(arr.join(","));
        noSwap = false;
        }
      }

    // If you get to the end of the array and no swaps have occurred, return
      if (noSwap) return;
      // Otherwise, repeat from the beginning
      else bubbleSort(arr);

}

let testArr = [2,4,6,8,1,3,5,7,9];

bubbleSort(testArr);

module.exports = bubbleSort;
