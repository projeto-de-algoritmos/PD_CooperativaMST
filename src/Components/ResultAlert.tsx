import { Alert } from "@mui/material";
import { Product } from "../../pages";
import { fractionalKnapsack } from "../knapsack";

type ResultAlertProps = {
  capacity: number;
  products: Product[];
};

const ResultAlert = ({ capacity, products }: ResultAlertProps) => {
  const { productsInBag, totalValue } = fractionalKnapsack(capacity, products);

  if (capacity === 0) {
    return <Alert severity="info">Informe a capacidade do veículo.</Alert>;
  }

  if (products.length === 0) {
    return (
      <Alert severity="info">Informe os produtos a serem transportados.</Alert>
    );
  }

  return (
    <Alert severity="success">
      O valor máximo que pode ser transportado é{" "}
      <b>R$ {totalValue.toFixed(2)}</b> com os seguintes produtos:
      <ul>
        {productsInBag
          .filter((product) => product.weight > 0)
          .map((product) => (
            <li key={product.id}>
              {product.weight} kg de {product.description}
            </li>
          ))}
      </ul>
    </Alert>
  );
};

export default ResultAlert;
