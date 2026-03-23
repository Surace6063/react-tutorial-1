import { cn } from "../../libs/utils"

const Button = ({ children, className, 
  variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-900/80",
    outline: "border border-gray-300 hover:bg-slate-50",
    secondary: "bg-slate-300 hover:bg-slate-300/80"
  }

  return (
    <button
      {...props}
      className={
        cn(
          "px-4 py-2 rounded-md cursor-pointer",
           className,
           variants[variant]
        )
      }
    >
      {children}
    </button>
  )
}
export default Button
