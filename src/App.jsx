import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
