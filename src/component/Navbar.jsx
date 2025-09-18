import React, { useState } from "react";
import { Link } from "react-router-dom";
import {auth} from "../firebase"
import {signOut} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navi=useNavigate()
  const[log,setlog]=useState(false)

  useEffect(()=>{
    auth.onAuthStateChanged(function(user){
        if(user){
          setlog(true)
         
        }
        else{
          setlog(false)
          console.log("logout")
        }
    })
  })


  function logout()
  {
    signOut(auth).then(()=>{

    alert("Sucessfully Loggedout") 
    navi("/login")
    })
  }

  return (
    <div className="">
      <nav className="relative px-4 py-4 flex justify-between items-center ">
        {/* Logo */}
        <a className="text-3xl font-semibold leading-none" href="#">
        <h1>StuffBox</h1>
        </a>

        {/* Mobile Burger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-burger flex items-center text-white p-3"
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        {/* Center Nav Links */}
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
          <li><Link to={"/home"} className="text-sm text-gray-400 hover:text-white" href="#">Home</Link></li>
          <li className="text-gray-300">•</li>
          <li><a className="text-sm text-gray-400  hover:text-white"  href="#">Activity</a></li>
          <li className="text-gray-300">•</li>
          <li><Link to={"/blog"} className="text-sm text-gray-400 hover:text-white" href="#">Blog</Link></li>
          <li className="text-gray-300">•</li>
          <li><a className="text-sm text-gray-400 hover:text-white" href="#">Gmail</a></li>
          
         
        </ul>

        {/* Desktop Buttons */}
        
        <div className="hidden lg:flex items-center space-x-3">

          {
            log?  <Link onClick={logout} className="py-2 px-6 bg-black hover:bg-rose-300 text-sm text-white font-bold rounded-xl transition duration-200">
            Logout
          </Link>:<Link to={"/login"} className="py-2 px-6 bg-white hover:bg-gray-100 text-sm text-gray-800 font-bold rounded-xl transition duration-200">
            Login
          </Link>
          }
         

        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-menu relative z-50 lg:hidden">
          <div
            onClick={() => setIsOpen(false)}
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <svg className="h-12" viewBox="0 0 10240 10240">
                  <path d="M8284 9162 c-2 -207 -55 ..." />
                </svg>
              </a>
              <button onClick={() => setIsOpen(false)} className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul>
              {["Home", "Activity", "Progress", "Gmail", "Blog"].map((item) => (
                <li key={item} className="mb-1">
                  <a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-rose-300 rounded">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Buttons */}
            <div className="mt-auto pt-6">
              <Link to={"/Login"} className="block px-4 py-3 mb-3 text-xs text-center font-semibold bg-gray-200 hover:bg-gray-300  rounded-xl">
                Sign in
              </Link>
              <Link to={"/signup"} className="block px-4 py-3 mb-2 text-xs text-center text-white font-semibold bg-black hover:bg-rose-300 rounded-xl">
                logout
              </Link>
             
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;