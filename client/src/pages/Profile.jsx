import React, {useState, useEffect, useContext, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import userimg from '../assets/user.png'
import { RenderCards } from '../components';
import { UserContext } from '../components/UserContext'

const Profile = ({allPosts}) => {
  const { userData } = useContext(UserContext);
  const myPosts = allPosts.filter(post => post.userid === userData._id);
  return (
    <section className='max-w-7xl mx-auto'>
      <div className='mb-10'>
        <h1 className='font-extrabold text-white text-[32px]'>
          Profile
        </h1>
        <div className='flex flex-row items-center justify-between'>
          <div className='w-1/4 flex justify-center'>
          <div className='w-48 h-48 rounded-full object-cover bg-white
                flex justify-center items-center text-[#616161] text-8xl font-bold'>
                {userData.firstname[0]}
          </div>
            
          </div>
          <div className='w-2/3 bg-[#616161] text-[20px] flex flex-col justify-center text-gray-600 font-inter py-10 rounded-md font-bold px-20'>
            <div className='flex items-center gap-3 mb-2 text-white'>
              <FontAwesomeIcon icon={faUser} className='mr-2' />
              <span>{userData && `${userData.firstname} ${userData.lastname}`}</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-white'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
              <span>{userData && `${userData.location}`}</span>
            </div>
            <div className='flex items-center gap-3 mb-2 text-white'>
              <FontAwesomeIcon icon={faHeart} className='mr-2' />
              <span>{userData && `${userData.artstyle}`}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='font-extrabold text-white text-[32px] mb-5'>
          My Posts
        </h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-3
            xs:grid-cols-2 grid-cols-1 gap-3">
                <RenderCards
                  data={myPosts}
                  title="No posts found"
                />
            </div>
      </div>
    </section>
  )
}

export default Profile