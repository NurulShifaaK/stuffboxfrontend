import React, { useState } from 'react'
import {auth} from "../firebase"
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'


const Register = () => {
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const navi=useNavigate()

    const handlesignup = async()=>{
        try{
          await auth.createUserWithEmailAndPassword(email, password)
          alert("Email Registered Sucessfully Login!") 
          navi("/login")
        }
        catch(error){
            console.log(error);
            alert("The Account already registered do login")
        }

        setemail("")
        setpassword("")
    }
  return (
    <>
        <div className="absolute top-1 left-1 w-full text-center text-white">
          <Navbar/>
        </div>   
    <div><p className='text-white/50 font-semibold text-4xl'>Create Your Stuffbox</p></div>

    <div className="flex flex-col justify-center max-w-xl mx-auto p-6 mt-10 bg-white/30 rounded-2xl shadow space-y-4">
    <input className='border border-black/30 rounded px-4 py-1' 
    placeholder='Name' />
    <input  className='border border-black/30 rounded px-4 py-1'  type="text"
    value={email}
    placeholder='Email'
    onChange={(e)=>setemail(e.target.value)} />

    <input  className='border border-black/30 rounded px-4 py-1'  type="text"
    value={password}
    placeholder='Password'
    onChange={(e)=>setpassword(e.target.value)} />
    <button  className='rounded px-4 py-1 hover:underline font-bold text-white/70 text-lg'
     onClick={handlesignup}>Signup</button>

     <p className='text-center text-white/60 font-semibold text-lg'>Already member?<Link to={"/login"}><span className='font-bold hover:underline hover:cursor-default text-amber-900'>Login</span></Link></p>
   </div>
   </>
  )
}

export default Register