import { Container, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem/CartItem";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveCartQty,
  handleEmptyCart,
}) => {
  const classes = useStyles();

  // console.log(cart);
  // console.log(cart.line_items.length);
  // const isEmpty = false;
  // const isEmpty = cart.total_items.length == 0;

  if (!cart.line_items) return "Loading";

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your cart
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCartQty={handleRemoveCartQty}
            />
            {/* <div>items</div> */}
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
          <div className={classes.toolbar} />
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} varient="h3">
        {" "}
        Your Shopping Cart{" "}
      </Typography>
      {!cart.line_items.length ? EmptyCart() : FilledCart()}
    </Container>
  );
};

export default Cart;
