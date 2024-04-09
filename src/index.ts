export const add = (x: number, y: number): number => {
  return x + y;
};

export const convertToInteger = (str: string): number => {
  let output: number[] = [];
  const numbers: string[] = str
    .split(" ")
    .filter((word) => word !== "and")
    .reverse();
  const oneTo19 = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = ["twenty", "thirty"];

  numbers.forEach((word) => {
    if (oneTo19.includes(word)) {
      output.push(oneTo19.indexOf(word));
    }

    
    
  });

  return parseInt(output.join(""));
};
