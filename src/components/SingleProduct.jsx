import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const SingleProduct = () => {
  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products/15"
      )
      return response.data
    },
    staleTime: 5000 // data is fresh for 5 sec (no refecth during this time)
  })

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  console.log(product)

  return (
    <div className="p-4">
       <h3 className="text-2xl font-semibold mb-4">
        Single Product
       </h3>

       <div className="space-y-4">
         <img src={product.images[0]} 
         alt={product.title} className="h-60" />

         <div>
           <h1 className="text-4xl font-bold text-gray-800">
             {product.title}
           </h1>
           <p className="mt-4 font-medium text-gray-600">
            {product.category.name}
           </p>
           <p className="text-2xl font-semibold text-pink-600">
            ${product.price}
           </p>
           <div className="mt-6">
              <h3 className="text-xl font-semibold">
                Description
              </h3>
              <p className="text-gray-600 mt-2 text-justify">
                {product.description}
              </p>
           </div>
         </div>
       </div>
    </div>
  )
}
export default SingleProduct