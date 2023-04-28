import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import Preference from './components/Preferences'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, CreatePost, Login, Profile, Signup} from './pages'
import user from './assets/user.png'

const App = () => {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white
      sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/" className='font-extrabold text-[30px]'>
            CRAITE
          </Link>
          {isLogIn ? (
            <div className='flex justify-between gap-2'>
              <Link to="/create-post"
            className="font-inter font-medium bg-[#39AEA9]
           text-white px-4 py-2 rounded-md">
              Create Post
            </Link>
            <Link to="/profile"
            className=" flex items-center font-inter gap-2 font-medium bg-[#39AEA9]
           text-white px-4 py-2 rounded-md">
              Profile
              <img src={user} alt="user profile" className= "w-6 h-6 object-contain invert"/>
            </Link>
            </div>
            ) : (
              <Link to="/log-in"
              className="font-inter font-medium bg-[#39AEA9]
              text-white px-4 py-2 rounded-md">
                Log In
              </Link>
          )}
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9f8fe] 
      min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/log-in" element={<Login />}/>
          <Route path="/create-post" element={<CreatePost />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sign-up" element={<Signup />}/>
        </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App