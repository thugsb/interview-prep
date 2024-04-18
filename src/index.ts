export const add = (x: number, y: number): number => {
  return x + y;
};

export class Checkout {
  pricingRules: Function;
  items: string[] = [];
  constructor(princingRules: Function) {
    this.pricingRules = princingRules;
  }

  scan(item: string) {
    this.items.push(item);
  }

  total() {
    return calculateTotal(this.items);
  }
}

type Quantities = {
  [key: string]: number;
};

function calculateTotal(items: string[]) {
  const quantities: Quantities = {};
  items.forEach((item) => {
    quantities[item] = items.filter((i) => item === i).length;
  });

  return princingRules(quantities) / 100;
}

export function princingRules(quantities: Quantities): number {
  let cost = 0;
  if (quantities.hasOwnProperty("CF1")) {
    cost += quantities.CF1 * 1123;
  }

  if (quantities.hasOwnProperty("FR1")) {
    if (quantities.FR1 % 2 === 0) {
      cost += (quantities.FR1 * 311) / 2;
    } else {
      cost += ((quantities.FR1 + 1) / 2) * 311;
    }
  }

  if (quantities.hasOwnProperty("SR1")) {
    if (quantities.SR1 >= 3) {
      cost += quantities.SR1 * 450;
    } else {
      cost += quantities.SR1 * 500;
    }
  }

  return cost;
}
