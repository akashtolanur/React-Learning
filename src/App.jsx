import Navbar from "./components/Navbar"
import BlogForm from "./components/BlogForm"
import BlogDetails from "./components/BlogDetails"
import { Route, Routes } from "react-router-dom"
import Parent from "./props/Parent"

function App() {

   
    return (
        <div>
            <Navbar/>
            {/* <Parent/> */}

            {/* <Routes>
                <Route path="/" element={<BlogForm />}/>
                <Route path="/blogs/:id" element={<BlogDetails/>}/>
            </Routes> */}

        </div>
    )
}
export default App

