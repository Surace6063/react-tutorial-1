import Button from "./ui/button"
import Label from "./ui/label"
import Input from "./ui/input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// form validation schema
const schema = yup.object({
  fullName: yup.string().required("FullName is required.")
  .min(3,"FullName must be atleast 3 charcters.").max(25,"FullName must not exceed 25 charcters."),
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup.string().required("Password is required."),
  conformPassword: yup.string().required("Conform Paasowrd is required.").oneOf([
    yup.ref("password")
  ],"Password didn't match."),
  country: yup.string().required("Country is required."),
  gender: yup.string().required("Please select atleast one gender.")
})

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // function to handle form submit
  const handleRegister = (data) => {
    console.log(data)
    reset() // rest form
  }

  return (
    <div className="h-screen p-4 flex justify-center items-center">
      <form
        className="border border-gray-400 p-10 rounded-md max-w-xl w-full shadow space-y-2"
        onSubmit={handleSubmit(handleRegister)}
      >
        <div>
          <Label htmlFor="fullName">FullName</Label>
          <Input
            type="text"
            placeholder="Enter your fullname"
            id="fullName"
            name="fullName"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="conformPassword">Conform Password</Label>
          <Input
            type="password"
            id="conformPassword"
            placeholder="Enter your password again"
            {...register("conformPassword")}
          />
          {errors.conformPassword && (
            <p className="text-red-600 text-sm">
              {errors.conformPassword.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="country">Country</Label>
          <select
            name="country"
            id="country"
            className="border border-gray-300 p-2 rounded-md w-full"
            {...register("country")}
          >
            <option value="">Select a country</option>
            <option value="np">Nepal</option>
            <option value="ind">India</option>
          </select>
          {errors.country && (
            <p className="text-red-600 text-sm">{errors.country.message}</p>
          )}
        </div>

        <div>
          <Label>Choose a gender</Label>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              value="male"
              name="gender"
              id="male"
              {...register("gender")}
            />
            <Label htmlFor="male">Male</Label>
          </div>

          <div className="flex items-center gap-1">
            <input
              type="radio"
              value="female"
              name="gender"
              id="female"
              {...register("gender")}
            />
            <Label htmlFor="female">FeMale</Label>
          </div>
          {errors.gender && (
            <p className="text-red-600 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
export default ReactHookForm
