const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(listData1, listData2) {
  const totalList = [];
  for (let i = 0; i < listData1.length; i++) {
    totalList.push(listData1[i], listData2[i]);
  }
  return totalList;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(listData1, listData2) {
  return _.flatten(_.zip(listData1, listData2));
}
console.log(zipListTheSimpleWay(list1, list2));
