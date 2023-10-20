import { Outlet, Navigate } from 'react-router-dom'
import AuthDetails from '../Auth/AuthDetails'


const PrivateRoutes = () => {
    let auth = AuthDetails
    return(
        auth ? <Outlet/> : <Navigate to="/"/> 
    )
}

export default PrivateRoutes
