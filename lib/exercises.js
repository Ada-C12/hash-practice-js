// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) overall. Iterating over the array of strings to extract each string is O(n) where n is the length of the array. Alphabetizing each string is itself O(n) where n is the length of the word. Checking for the key in the uniqAnagrams object is O(1), and inserting an object into an array in Javascript is O(n). Pretty sure Object.keys is an O(n) situation as well.
// Space Complexity: O(n). Creating a hash with a size of up to 'n' length of strings, and creating an array of subarrays with a total size that's up to 'n' length of strings. (Also creating an array 'key' that's the size of the length of one string.)
function groupedAnagrams(strings) {
  // return empty if no strings
  if (strings.length === 0) return strings;

  let uniqAnagrams = {};

  strings.forEach(s => {
    // alphabetize one string to use as a key
    let key = s.split('');
    key = key.sort();
    key = key.join('');

    if (uniqAnagrams.hasOwnProperty(key)) {
      // if alphabetized string exists as a key
      // add the un-alphabetized string to the key's array
      uniqAnagrams[key].push(s)
    } else {
      // create a new key (alphabetized string) with value of an array containing the un-alphabetized string
      uniqAnagrams[key] = [s];
    }
  })

  let anagramArrays = [];
  let keys = Object.keys(uniqAnagrams);

  // for each key in uniqAnagrams,
  // add the value (array of anagram strings) to anagramArrays 
  keys.forEach(key => {
    anagramArrays.push(uniqAnagrams[key])
  })

  return anagramArrays;

}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n). 
// Iterating over 'list' is O(n) where n is the length of 'list', iterating over 'uniqEls' is O(n) where n is the length of uniqEls(less than or equal to the length of 'list').
// Space Complexity: O(n). Creating a hash and an array are both O(n).

function topKFrequentElements(list, k) {
  if (k === 0 || list.length === 0) return [];

  // iterate over list (O(n))
  // each unique item becomes a new key
  // each repeated item adds the value of the key by 1
  let listHash = {};
  let uniqEls = [];
  list.forEach(el => {
    listHash[el] ? listHash[el] += 1 : listHash[el] = 1
    if (!uniqEls.includes(el)) uniqEls.push(el)
  })

  // for each unique element,
  // we sort based on their corresponding value
  for (let i = 0; i <= uniqEls.length; i++) {
    if (listHash[uniqEls[i]] < listHash[uniqEls[i+1]]) {
      let j = i;
      while (listHash[uniqEls[j]] < listHash[uniqEls[j + 1]]) {
        let temp = uniqEls[j];
        uniqEls[j] = uniqEls[j + 1];
        uniqEls[j + 1] = temp;
        j -= 1;
      }
    }
  }

  // return an array of the first 'k' elements from the unique elements array
  if (uniqEls.length <= k) return uniqEls
  return uniqEls.slice(0, k)
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function validSudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  groupedAnagrams,
  topKFrequentElements,
  validSudoku
};
