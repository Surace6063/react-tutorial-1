import CategoryList from "../components/CategoryList"
import Products from "../components/Products"
import { useQuantity } from "../context/QuantityContext"

const HomePage = () => {
  const {quantity} = useQuantity()

  return (
    <div className="container mt-6">
       Cart Quantity: {quantity}
      <CategoryList />
      <Products />
    </div>
  )
}
export default HomePage
