// function countBs(str) {
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == 'B') ++counter;
//   }
//   return counter;
// }

function countChars(str, findSymb) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == findSymb) ++counter;
  }
  return counter;
}

function countBs(str) {
  return countChars(str, "B");
}

console.log(countBs("B34__jjj_B53"));