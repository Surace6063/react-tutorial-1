import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Form2 from "./components/Form2"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
       {/* navbar */}
       {/* <Navbar /> */}

       {/* content */}
       {/* <MainContent /> */}
      
       {/* footer */}
       {/* <Footer /> */}

       {/* <Counter /> */}
       {/* <Form /> */}
       <Form2 />
    </div>
  )
}

export default App















// import './App.css'

// // component -> it is a js function that returns jsx

// const App = () => {
//   const text = "React JS"
//   const num1 = 10
//   const num2 = 20
  
//   // boolean
//   let msg = ""
//   const isVerified = true

//   if(isVerified){
//     msg = "You can access protected page."
//   }else{
//     msg = "You are not verified."
//   }

//   const age = 20

//   const isAdmin = true

//   return (
//     <div className='p-4'>
//       <h1 className='text-xl font-extrabold mb-3 text-red-800'>
//         This is {text}. This is awesome.
//       </h1>
//       <p>
//         The sum of {num1} and {num2} is 
//         {num1 + num2}
//       </p>
//       <button 
//       className="bg-teal-800 text-white px-6 py-2 rounded-md">
//         Click Me
//       </button>
//       <p>
//         {msg}
//       </p>

//       {/* terniary operator : condition ? true statement : false-statement */}

//       {
//         age >= 18 ? (
//           <>
//             <p>You can vote.</p>
//             <button>vote</button>
//           </>
//         ) : (
//          <>
//             <p>You cannot vote.</p>
//             <button>go back</button>
//          </>
//         )
//       }
      
//       <br />
//       <br />
//       <hr />
//       <div>
//         {
//           isAdmin && (
//            <div>
//              <p>Welcome, Admin!</p>
//              <button className="bg-rose-700 text-white px-6 py-2 rounded-md">
//               go to admin dashboard
//               </button>
//            </div>
//           )
//         }
//       </div>

//       {
//         age >= 18 && (
//           <p>You are legal to access site.</p>
//         )
//       }
//     </div>
//   )
// }

// export default App
