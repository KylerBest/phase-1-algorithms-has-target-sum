function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(i != j){
        if(array[i] + array[j] == target){
          return true;
        }
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  I think this is O(n^2) since it loops through the entire array 
  once for every single element
*/

/* 
  Add your pseudocode here
  loop through the array
  create inner loop so we can add the outerloop's element to 
  every other element in the array and check if the sum
  is equal to the target value
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
