import { useEffect, useState } from "react"
import Button from "./ui/button"

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [on,setOn] = useState(false)

    // lets you run code after rendering
    // 1. useEffect without dependency array
    // runs on first component render and also run after every changes in component
    useEffect(()=>{
       // side effect code here
       console.log("render") 
    })
    
    // 2. useEffect with empty dependency array
    // only runs when component load
    useEffect(()=>{
       // side effect code here
       console.log("render 2") 
    },[])

    // 2. useEffect with dependency array
    // only runs when component load and runs according to condition inside array
    useEffect(()=>{
       // side effect code here
       console.log("render 3") 
    },[count])


  return (
    <div className="p-4 m-4">
      <p>{count}</p>
      <Button onClick={()=>setCount(count + 1)}>
        Add
      </Button>
      <br />

      <Button onClick={()=> setOn(!on)} className="mt-6">
        {
            on ? "switch on" : "switch off"
        }
      </Button>
    </div>
  )
}
export default UseEffect