import { useCallback, useState } from "react";
import { Add } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { Product } from "../../pages";

type ProductFormProps = {
  addProduct: (product: Product) => void;
};

const ProductForm = ({ addProduct }: ProductFormProps) => {
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [price, setPrice] = useState("");

  const handleDescriptionChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    },
    []
  );

  const handleWeightChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(event.target.value);
    },
    []
  );

  const handlePriceChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPrice(event.target.value);
    },
    []
  );

  const handleAddProduct = useCallback(() => {
    addProduct({
      id: Math.random(),
      description,
      weight: Number(weight),
      price: Number(price),
    });

    setDescription("");
    setWeight("");
    setPrice("");
  }, [addProduct, description, weight, price]);

  return (
    <Box display="flex" alignItems="center">
      <TextField
        value={description}
        label="Descrição"
        variant="outlined"
        fullWidth
        onChange={handleDescriptionChange}
      />

      <Box ml={2}>
        <TextField
          value={weight}
          label="Peso"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
          variant="outlined"
          onChange={handleWeightChange}
        />
      </Box>

      <Box ml={2}>
        <TextField
          value={price}
          label="Preço"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="end">R$</InputAdornment>,
          }}
          variant="outlined"
          onChange={handlePriceChange}
        />
      </Box>

      <IconButton onClick={handleAddProduct}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default ProductForm;
