import { readFile } from "fs";

readFile("./input", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let strBinaryArray: Array<string> = data.split("\n");
  var oxyGen = determineOxOrCO2(strBinaryArray, "0", "1");
  var CO2 = determineOxOrCO2(strBinaryArray, "1", "0");
  let res = [...oxyGen]
    .map((elm, index) => +elm * Math.pow(2, 12 - index - 1))
    .reduce((acc, value) => acc + value);
  const res2 = [...CO2]
    .map((elm, index) => +elm * Math.pow(2, 12 - index - 1))
    .reduce((acc, value) => acc + value);
  console.log(res * res2);
});

const determineOxOrCO2 = (
  strBinaryArray: Array<string>,
  value1: string,
  value2: string
) => {
  var str = "";
  let counter = 0;
  let nbOfBinaryInCurrState = 0;
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < strBinaryArray.length; j++) {
      if (strBinaryArray[j].startsWith(str)) {
        nbOfBinaryInCurrState++;
        counter += +strBinaryArray[j][i];
      }
    }
    console.log(counter);
    if (counter == Math.ceil(nbOfBinaryInCurrState / 2)) {
      str += counter == Math.ceil(nbOfBinaryInCurrState / 2) ? "1" : "0";
    } else {
      str += counter < Math.ceil(nbOfBinaryInCurrState / 2) ? value1 : value2;
    }
    counter = 0;
    nbOfBinaryInCurrState = 0;
  }
  console.log(str);
  return str;
};
