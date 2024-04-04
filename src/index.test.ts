import { add } from "./index";

describe("test the add function", () => {
  test("should add two numbers", () => {
    expect(add(4, 3)).toBe(7);
  });
});
