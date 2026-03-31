const UserCard = ({user}) => {
  return (
    <div className="border border-red-600 p-4 rounded-md shadow mb-4 w-60">
       <p>ID: {user.id}</p>
       <p>Name: {user.name}</p>
       <p>Age: {user.age}</p>
    </div>
  )
}
export default UserCard