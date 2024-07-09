import "./App.css";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import CheckoutPr from "./pages/checkoutPr";
import Home from "./pages/home";
import PaySuccess from "./pages/paySuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/checkoutProcessing' element={<CheckoutPr />} />
        <Route path='/PaymentSuccessful' element={<PaySuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
