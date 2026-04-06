import CategoryList from "../components/CategoryList"
import Products from "../components/Products"

const HomePage = () => {
  return (
    <div className="container mt-6">
      <CategoryList />
      <Products />
    </div>
  )
}
export default HomePage
