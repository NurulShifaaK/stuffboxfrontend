import React, { useEffect, useState } from 'react'
import {auth,googleProvider} from "../firebase"
import { Link, useNavigate } from 'react-router-dom'
import GoogleLogo from "../assets/google.png";
import Navbar from './Navbar'

const Login = () => {
    const[Uemail,setUemail]=useState("")
    const[pass,setpass]=useState("")
    const navi=useNavigate()

    useEffect(()=>{
        auth.onAuthStateChanged(function(Uemail){
            if(Uemail){
        
                navi("/home")
            }
            else{
                console.log("logged out")
            }
        })
    })

    const handlelogin=async(e)=>{
        e.preventDefault();
      try{
       await auth.signInWithEmailAndPassword(Uemail,pass)
       alert("Login sucessfull")
       navi("/home")
      }
      catch(error){
        console.log(error)
        alert("Don't Have an Account? SIgnup.")
      }
    }
   

      // Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await auth.signInWithPopup(googleProvider);
      console.log("User Info:", result.user);
      alert(`Welcome ${result.user.displayName}`);
      navi("/home");
    } catch (error) {
      console.error(error);
      alert("Google login failed. Try again!");
    }
  };

  return (
   <>
    <div className="absolute top-1 left-1 w-full text-center text-white">
          <Navbar/>
        </div>
   <div><p className='font-bold text-4xl text-white/80'>Welcome Back To Stuffbox</p></div>
   <div className="flex flex-col justify-center max-w-xl mx-auto p-6 mt-10 bg-white/50 rounded-2xl shadow space-y-4">
    <input className='border border-black/30 rounded px-4 py-1' type="text"
    placeholder='Email'
    value={Uemail}
    onChange={(e)=>setUemail(e.target.value)} />

    <input className='border border-black/30 rounded px-4 py-1' type="text"
    placeholder='Password'
    value={pass}
    onChange={(e)=>setpass(e.target.value)} />
    <button 
     className='rounded px-4 py-1 hover:underline text-white/80 font-bold'
     onClick={handlelogin}>Login</button>

     <p className='font-bold text-white/80'>New to Stuffbox? <Link to={"/signup"}><span className='font-semibold text-l text-indigo-600 hover:underline'> Sign up for free.</span></Link></p>
      <hr className='text-black/30 font-bold'/>
        <button
          className="rounded px-4 py-2 bg-white text-black hover:bg-white/50 flex gap-3 "
          onClick={handleGoogleLogin}
        >
        <img className='h-6' src={GoogleLogo}/> <span className='font-semibold'>Google</span>
        </button>
   </div>
   </>
  )
}

export default Login