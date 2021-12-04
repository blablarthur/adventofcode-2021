import { readFile } from "fs";

readFile("./input", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let strBinaryArray: Array<String> = data.split("\n");
  var histo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < strBinaryArray.length; i++) {
    for (let j = 0; j < 12; j++) {
      histo[j] += +strBinaryArray[i][j];
    }
  }
  let res = histo
    .map((elm) => (elm > 500 ? 1 : 0))
    .map((elm, index) => elm * Math.pow(2, 12 - index - 1))
    .reduce((acc, value) => acc + value);
  const res2 = histo
    .map((elm) => (elm < 500 ? 1 : 0))
    .map((elm, index) => elm * Math.pow(2, 12 - index - 1))
    .reduce((acc, value) => acc + value);
  console.log(res * res2);
});
