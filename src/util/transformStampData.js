export const createMultiList = (arr) => {
  let multiList = {};

  arr.forEach(item => {
    let current = multiList[item] || 0;
    multiList = { ...multiList, [item]: current + 1 }
  });

  return multiList;
}
