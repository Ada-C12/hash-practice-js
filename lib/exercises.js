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
// Time Complexity: O(n*m) - n: rows in sudoku table; m: columns in sudoku table
// Space Complexity: ?

function valid_sudoku(table) {
  let tracker = {
    row: {},
    column: {},
    table: {}
  };

  for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table.length; j++) {
          const value = table[i][j]
          if (value === '.') {
            continue
          }
          const tableIndex = Math.floor((i / 3)) * 3 + j / 3

          // tracker.table[tableIndex] = tracker.table[tableIndex] ? tracker.table[tableIndex] : {};
          // tracker.row[i] = tracker.row[i] ? tracker.row[i] : {};
          // tracker.column[j] = tracker.column[j] ? tracker.column[j] : {};
          if (!tracker.table[tableIndex]) {
            tracker.table[tableIndex] = {};
          }
          if (!tracker.row[i]) {
             tracker.row[i]= {};
          }
          if (!tracker.column[j]) {
            tracker.column[j] = {};
          }

          if (tracker.table[tableIndex][value] || tracker.row[i][value] || tracker.column[j][value]) {
            return false;
          }

          tracker.table[tableIndex][value] = true;
          tracker.row[i][value] = true;
          tracker.column[j][value] = true;
      }
  }

  // console.log(tracker)
  return true;
};

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
console.log(valid_sudoku([
  [".","8","7","6","5","4","3","2","1"],
  ["2",".",".",".",".",".",".",".","."],
  ["3",".",".",".",".",".",".",".","."],
  ["4",".",".",".",".",".",".",".","."],
  ["5",".",".",".",".",".",".",".","."],
  ["6",".",".",".",".",".",".",".","."],
  ["7",".",".",".",".",".",".",".","."],
  ["8",".",".",".",".",".",".",".","."],
  ["9",".",".",".",".",".",".",".","."]]))