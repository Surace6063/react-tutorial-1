import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import CategoryCard from "./CategoryCard"

const CategoryList = () => {
  const {
    data: categories,
    isLoading,
    error
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      )
      return response.data
    },
    staleTime: 5000 // data is fresh for 5 sec (no refecth during this time)
  })

  if (isLoading) return <p>loading...</p>
  if (error) return <p>{error}</p>

  console.log(categories)

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-2">Category Lists</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {
            categories.slice(0,5).map(cat =>(
                <CategoryCard key={cat.id} cat={cat} />
            ))
        }
      </div>
    </div>
  )
}
export default CategoryList
