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

export type Product = {
  id: number;
  description: string;
  weight: number;
  price: number;
};

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
        <Box minHeight={100} my={10}>
          <Box>
            <Typography variant="h5" gutterBottom>
              Capacidade do veículo
            </Typography>

            <TextField
              type="number"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
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
