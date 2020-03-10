// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n)^2
// Space Complexity: O(n)^2
function grouped_anagrams(strings) {
  const anagrams = {};
  strings.forEach((string) => {
    const sorted = alphabetize(string);
    if (anagrams[sorted]) {
      return anagrams[sorted].push(string);
    }
    anagrams[sorted] = [string];
  })
  sortedAnagrams = []
  for (const key in anagrams) {
    sortedAnagrams.push(anagrams[key])
  }
 
  return sortedAnagrams

}

function alphabetize(word) {
  word = word.split('');
  word = word.sort();
  word = word.join('');
  return word;
}


// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n) where n is number of unique numbers in list
function top_k_frequent_elements(list, k) {
  if(list.length < 1) return list;

  const elements = {}
  list.forEach((num) => {
    elements[num] = (elements[num]+1) || 1 ;
  });

  countArray = []
  answer = []

  for (const key in elements) {
    countArray.push([parseInt(key), elements[key]]);
  }

  countArray.sort(function(a, b) {
    return b[1] - a[1];
  });

  for(let i = 0; i < k; i++) {
    answer.push(countArray[i][0]);
  };

  return answer;
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
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
