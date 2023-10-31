import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Footer from "./Components/static/Footer";
import Navbar from "./Components/static/NavBar";
import Services from "./Components/static/Services";




function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> 
      <Services />
      <Footer />
      <Navbar />
    </>
  )
}

export default App
