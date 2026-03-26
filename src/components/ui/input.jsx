import { cn } from "../../libs/utils"

const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={cn(
        "border border-gray-300 p-2 rounded-md w-full block",
        className
      )}
    />
  )
}
export default Input
