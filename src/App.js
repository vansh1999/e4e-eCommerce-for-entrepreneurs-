import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

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
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <>
      <Navbar total_items={cart.total_items} />
      <Products products={products} onAddtoCart={handleAddToCart} />
    </>
  );
}

export default App;
