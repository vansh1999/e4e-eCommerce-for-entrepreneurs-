import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  let history = useHistory();

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();

    // setCart(await commerce.cart.retrieve());
    setCart(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const res = await commerce.cart.update(productId, { quantity });

    setCart(res.cart);
  };

  const handleRemoveCartQty = async (productId) => {
    const res = await commerce.cart.remove(productId);
    setCart(res.cart);
  };

  const handleEmptyCart = async () => {
    const res = await commerce.cart.empty();
    setCart(res.cart);
    // history.push("/");
    // console.log("empty cart");
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);

  console.log("this is cart", cart);

  return (
    <Router>
      <div>
        {/* ( if(cart === 'undefined'){<Navbar />}else
        {<Navbar total_items={cart.total_items} />}) */}
        <Navbar total_items={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddtoCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveCartQty={handleRemoveCartQty}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
