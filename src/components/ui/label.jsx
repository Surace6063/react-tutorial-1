import { cn } from "../../libs/utils"

const Label = ({ children, className, 
    ...props }) => {
  return (
    <label
      {...props}
      className={cn("font-medium text-gray-800 block mb-1", className)}
    >
      {children}
    </label>
  )
}
export default Label
