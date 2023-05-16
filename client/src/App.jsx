import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, Profile, Auth, PostPage} from './pages'
import {Nav} from './components'
import UserProvider from './components/UserContext'
const App = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () =>{
      setLoading(true);

      try{
        const response = await fetch('https://craite.onrender.com/api/v1/post',{
          method: 'GET',
          headers: {
            'Content-Type' : 'application/json',
          },
        })
        
        if(response.ok){
          const result = await response.json();
          setAllPosts(result.data.reverse());
          console.log(allPosts);
        }
       } catch (error){
        alert(error);
       } finally{
        setLoading(false);
       }
    }
    fetchPosts();
  }, [])

  return (
    <div className="wrapper">
      <BrowserRouter>
      <UserProvider>
        <div>
          <Nav/>
        </div>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#292929]
      min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home loading={loading} allPosts={allPosts}/>}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-post" element={<CreatePost allPosts={allPosts} setAllPosts={setAllPosts} />}/>
          <Route path="/profile" element={<Profile allPosts={allPosts}/>}/>
          <Route path="/posts/:id" element={<PostPage />}/>
        </Routes>
        </main>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App