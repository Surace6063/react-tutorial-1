import UserCard from "./UserCard"

// dummy data
const users = [
  { id: 101, name: "Suresh Thapa", age: 25 },
  { id: 102, name: "Ram Sharma", age: 24 },
  { id: 103, name: "John Doe", age: 22 }
]

const popular_users = [
  { id: 106, name: "Zoro", age: 25 },
  { id: 107, name: "Luffy", age: 24 }
]

const categories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Footwear" },
  { id: 3, name: "Clothing" },
  { id: 4, name: "Home" }
]

const UserList = () => {
  return (
    <div className="m-4">
      <h1 className="text-2xl font-semibold">User Lists</h1>

      <div className="mt-4">
        {users.map((item) => (
          <UserCard key={item.id} user={item}  />
        ))}
      </div>

      <hr className="my-6" />
      <h1 className="text-2xl font-semibold">Popular User Lists</h1>

      <div className="mt-4">
        {popular_users.map((item) => (
          <UserCard key={item.id} user={item} />
        ))}
      </div>

      <hr className="my-6" />
       <h1 className="text-2xl font-semibold">
        Category Lists
      </h1>

    </div>
  )
}
export default UserList
