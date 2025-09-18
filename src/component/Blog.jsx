import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { db } from "../firebasedb";
import { collection, addDoc, serverTimestamp,onSnapshot,deleteDoc,doc } from 'firebase/firestore';
import {auth} from "../firebase"


const Blog = () => {
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(false);
  const [upload,setupload] =useState([])
  const [admin,setadmin]=useState(false)

 useEffect(() => {
    
       auth.onAuthStateChanged(function(user){
              if(user){
                if(user.uid === "W6Nsnxh8QJgOaYHCsAGaiNVlt8V2")
                {
                  setadmin(true)
                }
                else{
                    setadmin(false)
                }
              }
              else{
               
                console.log("logout")
              }
          })

    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,        
        ...doc.data(),       
      }));
      setupload(notesData);
    });
      return () => unsubscribe();
  }, []);

//  if (upload.length === 0) {
//   return <p>No blog yet. Start typing.</p>;
// }
  console.log(upload)

  const handlePost = async () => {
    if (!post.trim()) {
      alert("please fill the blog");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "posts"), {
        content: post,
        createdAt: serverTimestamp()
      });

      setPost("");
      console.log(post);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setLoading(false);
  };

  const deleteblog = async(id)=>{
    await deleteDoc(doc(db, "posts" , id))
  }

  return (
    <>
      <Navbar />
      <div className='flex items-baseline justify-center px-4 py-8 bg-white max-w-screen-sm mx-auto w-full'>
        <div className='w-full'>
          <p className='text-3xl font-semibold text-center'>Personal Blog</p>
          <div className='text-center mt-12'>
            <textarea
              className='border border-black/30 shadow-2xl w-full rounded-2xl px-4 py-2 h-32'
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder='Type Your blog'
              maxLength={100}
            />
          
            <button
              onClick={handlePost}
              disabled={loading}
              className='m-4 bg-black text-white px-12 rounded py-2'
            >
                {
             loading ? "Posting..." : "Post"
                }
            </button>:
            
            
          </div>
        </div>
      </div>
      

    <div className='grid m-6 gap-6 lg:grid-cols-4 md:grid-cols-2'>
        
  {upload.map((note) => (
    <div  key={note.id}  className='  flex items-baseline-last justify-between p-5 border border-gray-200 rounded-xl shadow-md
     bg-white hover:shadow-lg transition-all duration-200'>
      
    <p className='text-base font-semibold text-gray-800' key={note.id}>{note.content}</p>
    
    {
     admin?  ( <button
        onClick={()=>deleteblog(note.id)}
         className='bg-black text-white px-4 py-1 rounded' >
            Delete</button>): ""
}
   
    </div>
  ))}
</div>
    </>
  );
}

export default Blog;
