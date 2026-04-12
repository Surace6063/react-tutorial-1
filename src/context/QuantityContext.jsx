import { createContext, useContext, useEffect, useState } from "react"

// 1. Create context
// This creates a "global store"
export const QuantityContext = createContext()

// 2. Create Provider Component
// This component will wrap our app and provide data
export const QuantityProvider = ({ children }) => {
  // create state (global state)
  // set initial value if present in localstorage else 0
  const [quantity, setQuantity] = useState(()=>{
   return JSON.parse(localStorage.getItem("quantity")) || 0
  })

  // function to increase quantity by 1
  const increment = () => {
    setQuantity(quantity + 1)
  }

  // function to decrease quantity by 1
  const decrement = () => {
    setQuantity(quantity - 1)
  }

  // saving quantity state to localstorage
  useEffect(()=>{
    localStorage.setItem("quantity",JSON.stringify(quantity))
  },[quantity])


  return (
    <QuantityContext.Provider value={{ quantity, increment, decrement }}>
      {children}
    </QuantityContext.Provider>
  )
}

// custom hook
export const useQuantity = () => {
    return useContext(QuantityContext)
}
