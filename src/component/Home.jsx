import React, { useState } from 'react'
import axios from 'axios'
import * as XLSX from "xlsx"
import Navbar from './Navbar'

const Home = () => {
    const[msg,setmsg]=useState("")
    const[status,setstatus]=useState(false)
    const[emailList,setEmailList]=useState([])

    const handlefile=(event)=>{
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (e) {
    // Convert to Uint8Array so XLSX can read it
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: "array" });
    
    const sheetName=workbook.SheetNames[0]
    const worksheet=workbook.Sheets[sheetName]
    const emailList=XLSX.utils.sheet_to_json(worksheet,{header:'A'})
    const totalemail=emailList.map((item)=>{return item.A})
    setEmailList(totalemail)
    console.log(totalemail) 
  };

  reader.readAsArrayBuffer(file);
    }

//     const sendemail=()=>{
//         setstatus(true)
//     //  axios.post("https://mailbackend-uvla.onrender.com/sendemail",
//     //   {msg:msg,emailList:emailList})

//     axios.post("https://mailbackend-uvla.onrender.com/sendemail", {
//   msg: msg,
//   emailList: emailList
// })
//      .then(function(data){
//         if(data.data === true){
//             alert("Email Sent Sucessfully")
//             setstatus(false)
//         }
//         else{
//             alert("Email Failed try again")
//         }
//      })
//     }

const sendemail = () => {
  setstatus(true);

  axios.post("https://mailbackend-uvla.onrender.com/sendemail", {
    msg: msg,
    emailList: emailList
  })
  .then((res) => {
    if (res.data.success) {
      alert("✅ Email Sent Successfully");
    } else {
      alert("❌ Email Failed, try again");
    }
    setstatus(false);
  })
  .catch((err) => {
    console.error("Error sending email:", err);
    alert("⚠️ Something went wrong while sending email");
    setstatus(false);
  });
};


  return (

      <>

       
    <div className="flex flex-col justify-center max-w-xl mx-auto p-6 mt-10 bg-white/30 rounded-2xl shadow space-y-6">


        <div className="absolute top-1 left-1 w-full text-center text-white">
          <Navbar/>
        </div>   

        <div>
        <textarea 
        className=' h-32 px-2 py-2 border text-black/70 border-black/20 w-[400px] rounded-xl ' 
        value={msg}
        onChange={(e)=>{setmsg(e.target.value)}}
        placeholder='enter your email text'/>
        </div>

        {/* <div className='bg-white/30 rounded w-[300px] flex justify-center'>
        <input onChange={handlefile} type='file' className='text-black/50 px-3 py-2'/>
        </div> */}

        <div className="flex justify-center">
  <label className="cursor-pointer bg-white/40 text-black/70 px-4 py-2 rounded shadow hover:bg-white/60 transition">
     Upload File
      <input type="file" onChange={handlefile} className="hidden" />
     </label>
      </div>

        <div>
            <p className='text-xl font-semibold text-black/60 text-center'>Total emails in the file : {emailList.length}</p>
            </div>
            <div className='flex justify-center'>
            <button
            onClick={sendemail} 
            className='bg-white/40 text-black/70 px-14 py-1 rounded '>{status?"Sending":"send"}</button>
        </div>

    </div>
    </>
  )
}

export default Home