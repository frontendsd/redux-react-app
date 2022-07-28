import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
          {/* <Home /> */}
      </Router>
    </div>
  )
}

export default App;
