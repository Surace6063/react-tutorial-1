import { useState } from "react"
import Button from "./ui/button"
import Label from "./ui/label"
import Input from "./ui/input"

const Form2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    country: "",
    gender: "",
    conformPassword: ""
  })

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    // prevent default browser reload
    e.preventDefault()

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
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="conformPassword">Conform Password</Label>
          <Input
            type="password"
            id="conformPassword"
            placeholder="Enter your password again"
            value={formData.conformPassword}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <select
            name="country"
            id="country"
            className="border border-gray-300 p-2 rounded-md w-full"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
            <option value="np">Nepal</option>
            <option value="ind">India</option>
          </select>
        </div>

        <div>
          <Label>Choose a gender</Label>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              value="male"
              name="gender"
              id="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <Label htmlFor="male">Male</Label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              value="female"
              name="gender"
              id="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <Label htmlFor="female">FeMale</Label>
          </div>
        </div>

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default Form2
