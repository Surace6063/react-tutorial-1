import { create } from "zustand"
import { persist } from "zustand/middleware"

const useQuantityStore = create(
  persist(
    (set) => ({
      // state
      quantity: 0,

      // function to increment
      increment: () => {
        set((state) => ({ quantity: state.quantity + 1 }))
      },
      // function to increment
      decrement: () => {
        set((state) => ({ quantity: state.quantity - 1 }))
      }
    }),
    {
      name: "q" // key in localStorage
    }
  )
)

export default useQuantityStore
