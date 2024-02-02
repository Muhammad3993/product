import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const AllRoutes = () => {
  return (
    <>
    <Navbar/>
        <Routes>
            <Route path='/' element={
                <Home/>
            }/>
        </Routes>
    <Footer/>
    </>
  )
}

export default AllRoutes;
