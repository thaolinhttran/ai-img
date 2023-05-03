import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, Profile, Auth} from './pages'
import {Nav} from './components'

const App = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const fetchUser = async () => {
    const response = await fetch('http://localhost:8080/user-data', {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({token:window.localStorage.getItem("token")})
    })
    const data = await response.json();
    console.log(data, "userData");
    if(data.status === "ok"){
      setIsLogIn(true);
      setUserData(data.data);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="wrapper">
      <BrowserRouter>
        <div>
          <Nav isLogIn={isLogIn} userData={userData}/>
        </div>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] 
      min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/profile" element={<Profile userData={userData}/>}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App