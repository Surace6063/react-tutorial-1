import Button from "./ui/button"

const PCard = ({ item }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-md shadow">
      <img src={item.images[0]} alt={item.title} />

      <h3 className="font-medium truncate">{item.title}</h3>
      <p className="text-gray-600">${item.price}</p>
      <Button className="mt-4 w-full">Add To Cart</Button>
    </div>
  )
}
export default PCard
