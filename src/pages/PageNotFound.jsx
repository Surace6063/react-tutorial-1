import { useNavigate } from "react-router-dom"
import Button from "../components/ui/button"

const PageNotFound = () => {
    const navigate = useNavigate()

    const goBack = () => { 
       // redirect to home page 
       navigate('/')
    }
    
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-bold">404 Error</h1>
        <p className="text-lg text-gray-600">Page not found!</p>
          <Button onClick={goBack}>Go back to home page</Button>
      </div>
    </div>
  )
}
export default PageNotFound
