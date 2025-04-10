import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const token = localStorage.getItem('bitbasket_access_token');


  return (
    token  ? <Navigate  to="/home"/> : <Outlet/>
  )
}

export default PrivateRoute