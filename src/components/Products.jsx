import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import PCard from "./PCard"

const Products = () => {
  const {
    data: products,
    isLoading,
    error
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      )
      return response.data
    },
    staleTime: 5000 // data is fresh for 5 sec (no refecth during this time)
  })

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">Product Lists</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products?.slice(0,10)?.map((item) => (
          <PCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
export default Products
