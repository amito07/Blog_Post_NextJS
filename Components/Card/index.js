import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  ButtonGroup,
  TextField,
  Stack,
  Chip,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import PaidIcon from '@mui/icons-material/Paid';

const CardComponent = ({ value }) => {
  const [productQuantity, setProductQuantity] = useState(0);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100%"
        image={value.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {value.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {value.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-around" }}>
        <TextField
          defaultValue={productQuantity}
          sx={{ width: "40%" }}
          id="outlined-basic"
          variant="outlined"
        />
        <ButtonGroup variant="contained">
          <Button aria-label="reduce">
            <RemoveIcon fontSize="small" />
          </Button>
          <Button aria-label="increase">
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </CardActions>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Chip icon={<PaidIcon/>} variant="outlined" label={value.price}></Chip>
        <Button startIcon={<AddShoppingCartIcon/>} variant="contained">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
