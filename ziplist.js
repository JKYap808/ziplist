const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(first, second) {
  const array = [];
  for(let i = 0; i < first.length; i++) {
    array.push(first[i]);
    array.push(second[i]);
  }
  return array;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(first, second){
  return _.flatten(_.zip(first, second));
}

console.log(zipListTheSimpleWay(list1, list2));
