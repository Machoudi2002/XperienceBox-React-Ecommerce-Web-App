import { lazy, Suspense } from "react";
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
const Checkout = lazy(() => import("./Pages/Checkout"));





function App() {

  return (
    <>
          <ShoppingCartProvider>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/TermsOfService" element={<StaticPages pageLink="TermsOfService" />} />
                <Route path="/PrivacyPolicy" element={<StaticPages pageLink="PrivacyPolicy" />} />
                <Route path="/ReturnPolicy" element={<StaticPages pageLink="ReturnPolicy" />} />
                <Route path="/Cart" element={<CartPage />} />
                <Route path="/Checkout" element={<Checkout />} />
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

    </>
  )
}

export default App
