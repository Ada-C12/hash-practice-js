// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  const anagrams = new Map();

  strings.forEach(string => {
    let freqs = {};
    string.split('').forEach(char =>
      freqs[char] ? freqs[char] += 1 : freqs[char] = 1);

    freqs = Object.entries(freqs).sort();
    freqs = JSON.stringify(freqs);

    let group = anagrams.get(freqs);
    group ? group.push(string) : group = [string];
    anagrams.set(freqs, group);
  });

  return [...anagrams.values()];
}

console.log(grouped_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: O(n)
// Space Complexity: O(n)
function top_k_frequent_elements(list, k) {
  let freqs = {};
  
  list.forEach(x => freqs[x] ? freqs[x] += 1 : freqs[x] = 1);

  freqs = Object.entries(freqs);
  const kTemp = freqs.slice(0, k);
  
  const getMinIndex = () => {
    return kTemp.reduce((minIndex, x, index) =>
      x < kTemp[minIndex] ? index : minIndex,
      0
    );
  };

  freqs.forEach((key, value) => {
    const minIndex = getMinIndex();
    if (value > kTemp[minIndex][1]) kTemp[minIndex][1] = value;
  });

  return kTemp.map(([val, _]) => +val);
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
