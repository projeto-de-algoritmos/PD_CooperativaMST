import { Product } from "../pages";

export function knapsack(capacity: number, products: Product[]) {
  const n = products.length;
  // Cria uma matriz dp (n + 1) x (capacity + 1) preenchida com zeros
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(capacity + 1).fill(0));

  // Preenche a matriz dp usando programação dinâmica
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (products[i - 1].weight <= j) {
        // Se o peso do item atual for menor ou igual à capacidade restante,
        // escolha entre incluir ou não incluir o item atual na solução
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i - 1][j - products[i - 1].weight] + products[i - 1].price
        );
      } else {
        // Se o peso do item atual for maior que a capacidade restante,
        // não inclua o item atual na solução
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // O valor máximo que pode ser obtido é armazenado em dp[n][capacity]
  let totalValue = dp[n][capacity];
  let currentCapacity = capacity;
  let productsInBag: Product[] = [];

  // Rastreia quais itens estão incluídos na solução ótima
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
