// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n * m^2) - where n is the number of strings in strings
// and m is the length of each string; this solution has to iterate over 
// every element in strings and then creates a sorted string using Javascript's
// .sort which has a O(n^2) time complexity
// Space Complexity: O(nm) - the result & resultObj space will at worse
// have as many elements as are in strings (if no anagrams), plus
// .split will create an array as large as the number of letters
// in the string

//see https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/
function groupedAnagrams(strings) {
  const result = [];
  const resultObj = {};

  if (strings.length === 0) {
    return result;
   }
   
   for (let i = 0; i < strings.length; i++) {
     const string = strings[i];
     const sortedString = string.split('')
      .sort()
      .join('');
 
     if (resultObj[sortedString]) {
       resultObj[sortedString].push(string);
     } else {
       resultObj[sortedString] = [string];
     }
   }
   
   for (const key in resultObj) {
     result.push(resultObj[key]);
   }
 
   return result;
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  groupedAnagrams,
  top_k_frequent_elements,
  valid_sudoku
};
