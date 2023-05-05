import React, {useState, useEffect} from 'react'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Nav = ({isLogIn, userData}) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    setShowLogout(false);
  };
  return (
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
            <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <Link
              to="/profile"
              className="flex items-center font-inter gap-2 font-medium bg-[#39AEA9] text-white px-4 py-2 rounded-md"
            >
              {userData && `${userData.firstname} ${userData.lastname}`}
              <img
                src={user}
                alt="user profile"
                className="w-6 h-6 object-contain invert"
              />
            </Link>
            {showLogout && (
              <button
                onClick={() => {
                  window.localStorage.removeItem("token");
                  window.location.reload();
                  navigate('/');
                }}
                className="absolute right-0 font-inter font-medium bg-[#a3cac8] text-white
                 px-4 py-2 rounded-md shadow-md z-10"
              >
                Log out
              </button>
            )}
          </div>
            </div>
            ) : (
              <Link to="/auth"
              className="font-inter font-medium bg-[#39AEA9]
              text-white px-4 py-2 rounded-md">
                Log In
              </Link>
          )}
        </header>
  )
}

export default Nav