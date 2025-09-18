import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Name from './Name'
import Register from './Register'
import Home from './Home'
import Blog from './Blog'


const Dashboard = () => {
  return (
   <>
  
   <BrowserRouter>
   <Routes>
    <Route path={"/"} element={<Name/>}/>

     <Route path={"/login"} element={<div className={`flex min-h-svh flex-col items-center justify-center h-screen
         bg-[#2a2830]
         [background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_3px,transparent_2px,transparent_130px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_3px,transparent_2px,transparent_130px)]`}><Login/></div>}/>

      <Route path={"/signup"} element={  <div className={`flex min-h-svh flex-col items-center justify-center h-screen
         bg-amber-600
         [background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_3px,transparent_2px,transparent_130px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.1)_0,rgba(255,255,255,0.1)_3px,transparent_2px,transparent_130px)]`}>
            <Register/></div>}/>

       <Route path={"/home"} element={   <div
      className={`flex min-h-svh flex-col items-center justify-center h-screen
         bg-rose-400
         [background-image:repeating-linear-gradient(to_right,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_3px,transparent_2px,transparent_100px),repeating-linear-gradient(to_bottom,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_3px,transparent_2px,transparent_100px)]`}>
        <Home/></div>}/>

       <Route path={"/blog"} element={<Blog/>}/>

   </Routes>
   </BrowserRouter>
   </>
  )
}

export default Dashboard