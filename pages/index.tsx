import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ProductTable from "../src/Components/ProductsTable";
import ProductForm from "../src/Components/ProductForm";
import { useCallback, useState } from "react";
import ResultAlert from "../src/Components/ResultAlert";

export type Product = {
  id: number;
  description: string;
  weight: number;
  price: number;
};

const Home: NextPage = () => {
  const [capacity, setCapacity] = useState(1000);
  const [products, setProducts] = useState<Product[]>([]);

  const handleCapacityChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCapacity(Number(event.target.value));
    },
    []
  );

  const addProduct = useCallback((product: Product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  }, []);

  const removeProduct = useCallback((id: number) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  }, []);

  return (
    <>
      <Head>
        <title>Cooperativa MST</title>
        <link rel="icon" href="/red-cap.png" />
      </Head>

      <Container maxWidth="md">
        <Box minHeight={100} my={4}>
          <Box minHeight="200px">
            <ResultAlert capacity={capacity} products={products} />
          </Box>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Capacidade do veículo
            </Typography>

            <TextField
              value={capacity}
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
              onChange={handleCapacityChange}
            />
          </Box>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom>
              Produtos
            </Typography>

            <ProductForm addProduct={addProduct} />
          </Box>

          <Box mt={4}>
            <ProductTable products={products} removeProduct={removeProduct} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
