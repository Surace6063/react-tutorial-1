const CategoryCard = ({ cat }) => {
  return (
    <div className="border border-gray-300 rounded-xl shadow p-4">
      <img src={cat.image} alt={cat.slug} />
      <h3 className="mt-2 font-medium text-lg truncate">{cat.name}</h3>
    </div>
  )
}
export default CategoryCard
