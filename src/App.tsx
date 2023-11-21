import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/static/Footer";
import Navbar from "./Components/static/NavBar";
import Services from "./Components/static/Services";
import StaticPages from "./Pages/StaticPages";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import Account from "./Pages/Account";
import Login from "./Components/other/Login";
import Register from "./Components/other/Register";
import { useState, useEffect } from "react";




function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDocumentStateChange = () => {
      if (document.readyState !== 'complete') {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };

    document.addEventListener('readystatechange', handleDocumentStateChange);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('readystatechange', handleDocumentStateChange);
    };
  }, []);

  return (
    <>
      {
        loading ? (
          <h1>Loading...</h1>
        ) : 
        (
          <ShoppingCartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/TermsOfService" element={<StaticPages pageLink="TermsOfService" />} />
              <Route path="/PrivacyPolicy" element={<StaticPages pageLink="PrivacyPolicy" />} />
              <Route path="/ReturnPolicy" element={<StaticPages pageLink="ReturnPolicy" />} />
              <Route path="/Cart" element={<CartPage />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Account/Login" element={<Login/>} />
              <Route path="/Account/Register" element={<Register/>} />
              <Route path="/Products/:productName" element={<ProductPage />} />
            </Routes> 
            <Services />
            <Footer />
            <Navbar />
          </ShoppingCartProvider>
        )
      }

    </>
  )
}

export default App
