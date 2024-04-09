import { add } from "./index";
import { convertToInteger } from "./index";

describe("test the add function", () => {
  test("should add two numbers", () => {
    expect(add(4, 3)).toBe(7);
  });
});

describe("test a full function", () => {
  test("should output an integer of the converted text below twenty", () => {
    expect(convertToInteger("zero")).toBe(0);
    expect(convertToInteger("one")).toBe(1);
    expect(convertToInteger("nine")).toBe(9);
    expect(convertToInteger("ten")).toBe(10);
    expect(convertToInteger("nineteen")).toBe(19);
  });
  test("should output integer of between 20-99", () => {
    expect(convertToInteger("twenty")).toBe(20);
    expect(convertToInteger("twenty-one")).toBe(21);
  });
});
