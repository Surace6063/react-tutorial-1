import { useEffect, useState } from "react"
import PCard from "./PCard"

const ProductList = () => {
    const [products,setProducts] = useState(null)

  useEffect(() => {
    // function to call api
    const getProducts = async () => {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json()
        console.log(data)
        setProducts(data) // updates products state with api response
      } catch (error) {
        console.log(error)
      }
    }

    getProducts()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">Product Lists</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {
            products?.map(item => (
                <PCard key={item.id} item={item} />
            ))
        }
      </div>
    </div>
  )
}
export default ProductList
