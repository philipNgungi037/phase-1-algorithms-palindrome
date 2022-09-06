function isPalindrome(word) {
  // Write your algorithm here
  let reversedArray = []
let fwdArray
let rvsString

function isPalindrome(fwdString) {
  stringSplitter(fwdString);
      return fwdString ===`${rvsString}`
}





function stringSplitter(string){
  fwdArray = string.split("")
  reverseSplitWord(fwdArray)
}

function reverseSplitWord(array){
  for(let i = array.length; i> 0; i--){
    reversedArray = [...reversedArray, array.pop()]

  }
  arraytoString(reversedArray)
}

function arraytoString (array){
  debugger;
  rvsString = array.join('');
  reversedArray=[]
}


/*
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;}