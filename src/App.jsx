import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import ProductPage from "./pages/ProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import Footer from "./components/Footer"
import PageNotFound from "./pages/PageNotFound"
import SingleProductPage from "./pages/SingleProductPage"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
    <div>
      <Routes>
        {/* main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Route>

        {/* error page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
