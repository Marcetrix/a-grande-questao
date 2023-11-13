import { Outlet, Navigate } from 'react-router-dom'
import AuthDetails from '../Auth/AuthDetails'


const PrivateRoutes = () => {
    let auth = AuthDetails
    console.log(auth + "######")
    return(
        auth ? <Outlet/> : <Navigate to="/"/> 
    )
}

export default PrivateRoutes
