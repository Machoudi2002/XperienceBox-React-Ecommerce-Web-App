import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/static/Footer";
import Navbar from "./Components/static/NavBar";
import Services from "./Components/static/Services";
import StaticPages from "./Pages/StaticPages";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import Cart from "./Components/other/Cart";
import ProductPage from "./Pages/ProductPage";




function App() {

  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TermsOfService" element={<StaticPages pageLink="TermsOfService" />} />
          <Route path="/PrivacyPolicy" element={<StaticPages pageLink="PrivacyPolicy" />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products/:productName" element={<ProductPage />} />
        </Routes> 
        <Services />
        <Footer />
        <Navbar />
      </ShoppingCartProvider>
    </>
  )
}

export default App
