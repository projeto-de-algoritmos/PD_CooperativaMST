import { Delete } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Product } from "../../pages";

type ProductTableProps = {
  products: Product[];
  removeProduct: (id: number) => void;
};

const ProductTable = ({ products, removeProduct }: ProductTableProps) => {
  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Descrição</TableCell>
              <TableCell>Peso</TableCell>
              <TableCell>Preço</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.description}</TableCell>
                <TableCell>{product.weight} kg</TableCell>
                <TableCell>R$ {product.price}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => removeProduct(product.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductTable;
