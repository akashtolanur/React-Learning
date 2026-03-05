import { Link } from "react-router-dom"

// import billImg from "../../assets/images/bill.png";

function Navbar(){

    return (
        
        <div className="flex flex-wrap py-6 items-center justify-between border-b border-gray-200">
            <div className="flex py-4 px-20 text-lg font-bold text-black">
                <Link to={"/"}>Transport App</Link>
            </div>
            <div className="nav-links px-10">
                <Link to={"/"}>Home</Link>
                <Link>Services</Link>
                <Link>Contact</Link>
                <Link>Login</Link>
            </div>
        </div>

    )
}

export default Navbar