import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/static/Footer";
import Navbar from "./Components/static/NavBar";
import Services from "./Components/static/Services";
import StaticPages from "./Pages/StaticPages";




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TermsConditions" element={<StaticPages pageLink="TermsOfService" />} />
        <Route path="/PrivacyPolicy" element={<StaticPages pageLink="PrivacyPolicy" />} />
      </Routes> 
      <Services />
      <Footer />
      <Navbar />
    </>
  )
}

export default App
