import { readFile } from "fs";
import { Directive } from "./directives";

readFile("./input_data", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let directiveArray: Array<Directive> = data.split("\n").map((elm) => {
    const [direction, valueStr] = elm.split(" ");
    const value = parseInt(valueStr);
    return { direction, value };
  });
  var positionX = 0;
  var positionY = 0;
  var aim = 0;
  for (let i = 0; i < directiveArray.length; i++) {
    [positionX, positionY, aim] = playDirective(
      directiveArray[i],
      positionX,
      positionY,
      aim
    );
  }
  console.log(positionX * positionY);
});

const playDirective = (
  directive: Directive,
  xpos: number,
  ypos: number,
  aim: number
) => {
  switch (directive.direction) {
    case "forward":
      xpos += directive.value;
      ypos += directive.value * aim;
      break;
    case "up":
      aim -= directive.value;
      break;
    case "down":
      aim += directive.value;
      break;
    default:
      break;
  }
  return [xpos, ypos, aim];
};
