import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuthenticated = false

    // check if user is authenticated or not 
    // if not redirect to login page
    if(!isAuthenticated){
      return <Navigate to="/login" replace /> 
    }
  
  // if user is authenticated.. access component  
  return <Outlet />
}
export default ProtectedRoute