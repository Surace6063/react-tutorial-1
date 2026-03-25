import { useState } from "react"
import Button from "./ui/button"
import { cn } from "../libs/utils"

const Counter = () => {
  // count -> name of state
  // setCount -> function to modify state
  // 0 -> initial value of state
  const [count, setCount] = useState(0)
  const [fullName,setFullName] = useState("Suresh Thapa")
  const [isOn,setIsOn] = useState(false)
  const [isHidden,setIsHidden] = useState(false)
  const [hobbies,setHobbies] = useState(['coding','treking','football','basketball'])

  // function to handle increment
  const increment = () => {
    setCount(count + 1)
    
    // when new state depends on previous state
    // setCount(prev => prev + 1)
    // setCount(prev =>  prev + 1)
  }

  // function to handle decrement
  const decrement = () => {
    setCount(count - 1)
  }

  // function to handle reset
  const reset = () => {
    setCount(0)
  }

  // function to handle increment by value
  const incrementByValue = (value) => {
    setCount(count + value)
  }

  // change full name
  // const changeFullName = () => {
  //   setFullName("John Doe")
  // }

  return (
   <div className="p-4">
    <hr className="my-10" />
      <h3 className="text-xl font-bold">
        list of hobbies
      </h3>

      <ul>
        {
          hobbies.map((item) => (
            <li key={item}>{item}</li>
          ))
        }
      </ul>

      <Button 
       className="mt-6"
       onClick={() => setHobbies([...hobbies,'drawing'])}
      >
        Add hobby
      </Button>




     {/* <div className="border border-gray-400 p-6 shadow rounded-xl w-fit m-10">
      <h1 className="text-center font-medium">Counter App</h1>

      <p className="text-center mt-4 font-medium">{count}</p>

      <div className="space-x-4 mt-6">
        <Button onClick={()=> setCount(count + 1)}>Add</Button>

        <Button onClick={decrement}>Subtract</Button>

        <Button onClick={reset}>Reset</Button>

        <Button onClick={() => incrementByValue(10)}>Increment By value</Button>
      </div>
    </div> */}

    {/* change fullname */}
    {/* <hr className="my-10" />
    <p>The fullName is {fullName}.</p>

    <Button onClick={()=> setFullName("John Doe")}>
      Change FullName
    </Button>

    <hr className="my-10" />
     <p>
        {
          isOn ? (
            <span className="text-green-500">
              Switch On
             </span>
          ) : (
             <span>Switch Off</span>
          )
        }
     </p>

     <Button onClick={()=>setIsOn(!isOn)}>
       Toogle Switch
     </Button>
     <br />
     <br />

     <p className={
      cn(
        "font-bold text-gray-900 mt-6",
        isHidden && "hidden"
      )
     }>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, in!
      </p>

      <Button onClick={()=>setIsHidden(!isHidden)}>
        {
          isHidden ? "Show text" : "Hide text"
        }
      </Button> */}

      

   </div>
  )
}
export default Counter
