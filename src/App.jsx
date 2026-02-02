import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import "./App.css"

import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import OrderDone from "./Components/OrderDone";
import AuthForm from "./Components/Login";
import UserInfo from "./Components/UserInfo";
import PopularBrand from "./Components/Popular_brand";
import ContactPage from "./Components/ContactPage";
import CartAnimation from "./Components/Cart_animation";
import ScrollToTop from "./Components/ScrollToTop";
import Duplicat from "./Components/Duplicat";
import AllProducts from "./Components/AllProducts";
import ProtectedRoute from "./store/ProtectedRoute";

import DataProvider from "./store/AppContext";
import AuthProvider from "./store/AuthContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [CartAnime, setCartAnime] = useState(false);

  useEffect(() => {
    if (CartAnime) {
      const timer = setTimeout(() => setCartAnime(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [CartAnime]);

  return (
    <AuthProvider>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          {CartAnime && <CartAnimation />}
          <ScrollToTop />

          <ToastContainer  position="top-right"  autoClose={3000} pauseOnHover="true" draggable="true" />
          <Routes>
            {/* ROOT DECIDER */}
            {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}

            {/* PUBLIC */}
            <Route path="/login" element={<AuthForm />} />

            {/* PROTECTED HOME */}
            <Route
              path="/"
              element={
                  <Duplicat setCartAnime={setCartAnime} />
              }
            />

            <Route path="/brands" element={<PopularBrand />} />
            <Route path="/products" element={<AllProducts setCartAnime={setCartAnime} />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* PROTECTED */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />

            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserInfo />
                </ProtectedRoute>
              }
            />

            <Route path="/order-done" element={<OrderDone />} />
          </Routes>


          <Footer />
        </BrowserRouter>
      </DataProvider>
      
    </AuthProvider>
    
  );
}

export default App;
