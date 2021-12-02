import { readFile } from "fs";

readFile("./input-day1-1.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let numberArray: Array<Number> = data
    .split("\n")
    .map((elm) => parseInt(elm, 10));
  var counter = 0;
  for (let i = 1; i < numberArray.length; i++) {
    counter += numberArray[i] > numberArray[i - 1] ? 1 : 0;
  }
  console.log(counter);
});
