import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import userimg from '../assets/user.png'

const Profile = ({userData}) => {
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Profile
        </h1>
        <div className='flex flex-row items-center'>
          <div className='w-1/3 flex justify-center'>
            <img src={userimg} alt='Profile Pic' className='w-48 h-48' />
          </div>
          <div className='w-2/3 bg-white text-[20px] flex flex-col justify-center text-gray-600 font-inter py-10 rounded-md font-bold px-20'>
            <div className='flex items-center gap-3 mb-2'>
              <FontAwesomeIcon icon={faUser} className='mr-2' />
              <span>{userData && `${userData.firstname} ${userData.lastname}`}</span>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <FontAwesomeIcon icon={faMapMarkerAlt} className='mr-2' />
              <span>{userData && `${userData.location}`}</span>
            </div>
            <div className='flex items-center gap-3 mb-2'>
              <FontAwesomeIcon icon={faHeart} className='mr-2' />
              <span>{userData && `${userData.artstyle}`}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile