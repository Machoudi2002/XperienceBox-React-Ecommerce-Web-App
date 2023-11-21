import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Footer from "./Components/static/Footer";
import Navbar from "./Components/static/NavBar";
import Services from "./Components/static/Services";
import Loading from "./Components/other/Loading";

const Home = lazy(() => import("./Pages/Home"));
const StaticPages = lazy(() => import("./Pages/StaticPages"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
const Account = lazy(() => import("./Pages/Account"));
const Login = lazy(() => import("./Components/other/Login"));
const Register = lazy(() => import("./Components/other/Register"));





function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleDocumentStateChange = () => {
      if (document.readyState !== 'complete') {
        setLoading(true);
      } else {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        ;
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
          <Loading />
        ) : 
        (
          <ShoppingCartProvider>
            <Suspense fallback={<Loading />}>
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
            </Suspense>
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
