import { useState } from "react"
import Button from "./ui/button"
import Label from "./ui/label"
import Input from "./ui/input"

const Form = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    // prevent default browser reload
    e.preventDefault()

    const formData = {
      fullName,
      email
    }

    // logic to send to backend (........)

    console.log(formData)
  }

  return (
    <div className="h-screen p-4 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-400 p-10 rounded-md max-w-xl w-full shadow space-y-2"
      >
        <div>
          <Label htmlFor="fullName">FullName</Label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default Form
