import { Product } from "../pages";

export function knapsack(capacity: number, products: Product[]) {
  const n = products.length;
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (products[i - 1].weight <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - products[i - 1].weight] + products[i - 1].price
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  let totalValue = dp[n][capacity];
  let currentCapacity = capacity;
  let productsInBag: Product[] = [];

  for (let i = n; i > 0 && totalValue > 0; i--) {
    if (totalValue == dp[i - 1][currentCapacity]) continue;

    productsInBag.push(products[i - 1]);
    totalValue -= products[i - 1].price;
    currentCapacity -= products[i - 1].weight;
  }

  return {
    totalValue: dp[n][capacity],
    productsInBag,
  };
}
