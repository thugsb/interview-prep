import { add } from "./index";
import { Checkout, princingRules } from "./index";

describe("test the add function", () => {
  test("should add two numbers", () => {
    expect(add(4, 3)).toBe(7);
  });
});

describe("test the checkout class", () => {
  test("should return the right cost for any amount of coffee", () => {
    const checkout = new Checkout(princingRules);
    checkout.scan("CF1");
    expect(checkout.total()).toBe(11.23);
    checkout.scan("CF1");
    expect(checkout.total()).toBe(22.46);
    checkout.scan("CF1");
    checkout.scan("CF1");
    checkout.scan("CF1");
    expect(checkout.total()).toBe(56.15);
  });

  test("should return the right cost for any amount of fruit tea", () => {
    const checkout = new Checkout(princingRules);
    checkout.scan("FR1");
    expect(checkout.total()).toBe(3.11);
    checkout.scan("FR1");
    expect(checkout.total()).toBe(3.11);
    checkout.scan("FR1");
    expect(checkout.total()).toBe(6.22);
    checkout.scan("FR1");
    expect(checkout.total()).toBe(6.22);
    checkout.scan("FR1");
    expect(checkout.total()).toBe(9.33);
  });

  test("should return the right cost for any amount of strawberries", () => {
    const checkout = new Checkout(princingRules);
    checkout.scan("SR1");
    expect(checkout.total()).toBe(5);
    checkout.scan("SR1");
    expect(checkout.total()).toBe(10);
    checkout.scan("SR1");
    expect(checkout.total()).toBe(13.5);
    checkout.scan("SR1");
    expect(checkout.total()).toBe(18);
    checkout.scan("SR1");
    expect(checkout.total()).toBe(22.5);
  });

  test("should return the correct cost for a mix of products", () => {
    const checkout = new Checkout(princingRules);
    const items = ["FR1", "SR1", "FR1", "FR1", "CF1"];
    items.forEach((item) => {
      checkout.scan(item);
    });
    expect(checkout.total()).toBe(22.45);

    const checkout2 = new Checkout(princingRules);
    const items2 = ["SR1", "SR1", "FR1", "SR1"];
    items2.forEach((item) => {
      checkout2.scan(item);
    });
    expect(checkout2.total()).toBe(16.61);
  });
});
