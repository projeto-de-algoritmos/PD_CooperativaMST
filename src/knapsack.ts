import { Product } from "../pages";

const sortProductsByPricePerWeight = (products: Product[]) => {
  return products.sort((a, b) => {
    const pricePerWeightA = a.price / a.weight;
    const pricePerWeightB = b.price / b.weight;

    if (pricePerWeightA > pricePerWeightB) {
      return -1;
    } else if (pricePerWeightA < pricePerWeightB) {
      return 1;
    } else {
      return 0;
    }
  });
};

export function fractionalKnapsack(capacity: number, products: Product[]) {
  const sortedProducts = sortProductsByPricePerWeight(products);

  let currentCapacity = capacity;
  let totalValue = 0;
  let productsInBag: Product[] = [];

  for (let i = 0; i < sortedProducts.length; i++) {
    const currentProduct = sortedProducts[i];

    if (currentProduct.weight <= currentCapacity) {
      totalValue += currentProduct.price;
      currentCapacity -= currentProduct.weight;
      productsInBag.push(currentProduct);
    } else {
      const fraction = currentCapacity / currentProduct.weight;

      totalValue += fraction * currentProduct.price;
      currentCapacity = 0;

      productsInBag.push({
        ...currentProduct,
        weight: currentProduct.weight * fraction,
      });
    }
  }

  return {
    totalValue,
    productsInBag,
  };
}
