// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n * m log m) - N: number of strings passed in; M: sorting time of each string
// Space Complexity: O(n * m) - N: number of unique letter sets; M: number of total arrays stored
function grouped_anagrams(strings) {
    let tracker = {}
    
    for (let i = 0; i < strings.length; i++) {
        let word = strings[i].split("").sort();
        
        tracker[word] ? tracker[word].push(strings[i]) : tracker[word] = [strings[i]]
    }
    
    const keys = Object.keys(tracker);
    
    const result = keys.map(key => { return tracker[key] });
    return result
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n + m) -> O(n) - N: length of list; m: unique numbers
// Space Complexity: O(m) m: unique numbers entered in hash
function top_k_frequent_elements(list, k) {
  if (list.length === 0) {
    return []
  }

  let tracker = {};

  for (let i = 0; i < list.length; i++) {
    if (tracker[list[i]]) {
      tracker[list[i]]++;
    } else {
      tracker[list[i]] = 1;
    }
  }

  
  let result = [];

  for (let i = 0; i < k; i++) {
    let max = 0;
    let maxKey = 0;

    for (let key in tracker) {
      if (tracker[key] > max) {
        max = tracker[key]
        maxKey = key;
        delete tracker[key]
      }
    }

    result.push(Number(maxKey))
  }

  return result
}


// This method will return true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?

function valid_sudoku(table) {

  // const nums = [1,2,3,4,5,6,7,8,9];

  // for (let i = 0; i < table.length; i++) {
  //   let current = table[i]
  //   let numsCheck = [...nums];
  //   for (let k = 0; k < table[i].length; k++) {
  //     let num = Number(current[k])
  //     // console.log(num)
  //     if (numsCheck[num]) {
  //       numsCheck.splice( numsCheck.indexOf(num), 1 );
  //       // console.log(numsCheck.indexOf(num))
  //     }
  //   }

  //         console.log(table[i]);
  //     console.log(numsCheck)
  // }
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};


// console.log(grouped_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(grouped_anagrams([]));
// console.log(grouped_anagrams(["eat", "ear", "tar", "pop", "pan", "pap"]));
// console.log(grouped_anagrams(["eat", "tae", "tea", "eta", "aet", "ate"]));
// console.log(grouped_anagrams(["tea","","eat","","tea",""]));
// console.log(top_k_frequent_elements([1,1,1,2,2,3], 2))
// console.log(top_k_frequent_elements([], 1))
// console.log(valid_sudoku([
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]))