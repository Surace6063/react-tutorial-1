import Button from "./ui/button"
import { Link } from "react-router-dom"
import { Handbag } from 'lucide-react';
import { useQuantity } from "../context/QuantityContext";
import useQuantityStore from "../zustand/QuantityStore";

const Navbar = () => {
  // accessing quantity state from QuantityContext
  // const {quantity} = useQuantity()

  // accessing quantity state from QUantityStore(zustand)
  const {quantity} = useQuantityStore()

  return (
    <nav className="border-b border-slate-300 bg-white py-4 shadow sticky top-0">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-rose-600 font-bold text-2xl">Logo</h1>
        </Link>

        <ul className="hidden md:flex gap-4 font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>

          <Link to="/products">
            <li>Products</li>
          </Link>
        </ul>

        <div className="flex gap-4 items-center">
          <Link to="/login">
            <Button>login</Button>
          </Link>

          <Link to="/register">
            <Button variant="outline">register</Button>
          </Link>

          <div className="flex gap-1 items-center">
            <Handbag />
            <span>
              {quantity}
            </span>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
