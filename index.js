function hasTargetSum(array, target) {
  const seenNumbers = {}
  
  for(const num of array){
   const comp = target - num;
   if (comp in seenNumbers) return true;
   seenNumbers[num] = true;
  }
 
  return false;
 } 

/* 
  Write the Big O time complexity of your function here
  runtime: O(n²)
  space: O(n)
*/

/* 
  Add your pseudocode here
  array input and target num 
  iterate through array and add up any 2 numbers
  check if any 2 combonations add up to target
  if so return true
  else false 
  
*/

/*
  Add written explanation of your solution here
  function hasTargetSum returns true if any two numbers
  in an array add up to the target number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: false");
  console.log('=>', hasTargetSum([5], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log('=>', hasTargetSum([-7, 9], 2));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
