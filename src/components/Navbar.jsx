import Button from "./ui/button"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="border-b border-slate-300 bg-white py-4 shadow">
      <div className="container flex justify-between items-center">
        <Link to="/">
          <h1 className="text-rose-600 font-bold text-2xl">Logo</h1>
        </Link>

        <ul className="flex gap-4 font-medium">
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

        <div className="space-x-4">
          <Link to="/login">
            <Button>login</Button>
          </Link>

          <Link to="/register">
            <Button variant="outline">register</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
