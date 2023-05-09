import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, isActive] = useState(false);

  const menuToggler = () => {
    isActive(!active)
  }

  return (
    <nav className="w-full fixed top-0 z-30">
       <div className="mx-auto md:w-1/3 w-11/12 mt-4 p-4 bg-blue-700 rounded-full shadow-2xl">
        <div className="flex justify-between items-center text-white">
            <h1 className="text-xl font-bold">सत्र</h1>
            {(active) ? 
              <div onClick={menuToggler} className="flex w-full justify-end gap-6 mx-4">
              <Link to="/" >Home</Link>
              <Link to="about">About</Link>
              <Link to="features">Features</Link>
            </div>
            : ''}
            {/* Hammburger Icon */}
            <svg onClick={menuToggler} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d={(active) ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"} /></svg>
        </div>
       </div>
    </nav>
  )
}

export default Navbar

