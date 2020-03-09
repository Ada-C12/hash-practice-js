// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n * m)
// Space Complexity: O(n)
function grouped_anagrams(strings) {
  let h = {}

  strings.forEach((word) => {
    const orderedChars = word.split("").sort().join("")
    if(h[orderedChars]){
      h[orderedChars].push(word)
    }else{
      h[orderedChars] = [word]
    }
  })
  return Object.values(h)
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  if (list.length == 0 ){
    return []
  }
let listObj = {}
let res= [];
  list.forEach((num) =>{
    if(listObj[num]){
      listObj[num] += 1
    }else {
      listObj[num] = 1
    }
  })
  const maxArray = Object.keys(listObj).sort((function(a, b) {
    if(listObj[a] == listObj[b]){
      return -1
    }else{
      return listObj[a] - listObj[b]
    }
  })).reverse() 
  for( let i = 0; i < k; i++){
    res.push(parseInt(maxArray[i]))
  }
  return res
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
}