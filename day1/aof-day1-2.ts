import { readFile } from "fs";

readFile("./input-day1-1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let numberArray: Array<number> = data
    .split("\n")
    .map((elm) => parseInt(elm, 10));
  var counter = 0;
  for (let i = 0; i < numberArray.length - 2; i++) {
    counter +=
      numberArray.slice(i, i + 3).reduce((acc, elm) => acc + elm) <
      numberArray.slice(i + 1, i + 4).reduce((acc, elm) => acc + elm)
        ? 1
        : 0;
  }
  console.log(counter);
});
