import React, {useState, useEffect, useContext} from 'react'
import user from '../assets/user.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../components/UserContext'

const Nav = () => {
  const { userData, isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setShowLogout(true);
  };

  const handleMouseLeave = () => {
    setShowLogout(false);
  };
  return (
    <header className="w-full flex justify-between items-center bg-[#292929]
      sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
          <Link to="/" className='font-extrabold text-[30px] text-white'>
            CRAITE
          </Link>
          {isLoggedIn ? (
            <div className='flex justify-between gap-2'>
              <Link to="/create-post"
            className="font-inter font-medium
           text-white px-4 py-2 rounded-md bg-[#616161] hover:bg-[#8a8989]">
              Create
            </Link>
            <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            {userData && (
              <Link
                to="/profile"
                className="flex items-center font-inter gap-2 bg-[#616161] 
                font-medium text-white px-4 py-2 rounded-md hover:bg-[#8a8989]"
              >
                <span>{`${userData.firstname} ${userData.lastname}`}</span>
                <div className='w-6 h-6 rounded-full object-cover bg-slate-700
                flex justify-center items-center text-white text-xs font-bold'>
                {userData.firstname[0]}
                </div>
              </Link>
            )}
            {showLogout && (
              <button
                onClick={() => {
                  window.localStorage.removeItem("token");
                  window.location.reload();
                  navigate('/');
                  setIsLoggedIn(false);
                }}
                className="absolute right-0 font-inter font-medium bg-[#616161] hover:bg-[#8a8989] text-white
                 px-4 py-2 rounded-md shadow-md z-10"
              >
                Log out
              </button>
            )}
          </div>
            </div>
            ) : (
              <Link to="/auth"
              className="font-inter font-medium bg-[#616161] hover:bg-[#8a8989]
              text-white px-4 py-2 rounded-md">
                Log In
              </Link>
          )}
        </header>
  )
}

export default Nav