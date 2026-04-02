import { useEffect, useState } from "react"
import PCard from "./PCard"
import axios from "axios"

const ProductList = () => {
    const [products,setProducts] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")

  useEffect(() => {
    // function to call api
    const getProducts = async () => {
      setIsLoading(true)
      setError("")
      try {
        const response = await axios.get("https://api.escuelajs.co/api/v1/products")
        console.log(response.data)
        setProducts(response.data) // updates products state with api response
      } catch (error) {
        console.log(error)
        setError("Error fetching data!")
      }finally{
         setIsLoading(false)
      }
    }

    getProducts()
  }, [])

  if(isLoading) {
    return <p>loading...</p>
  }

  if(error){
    return <p>{error}</p>
  }

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
