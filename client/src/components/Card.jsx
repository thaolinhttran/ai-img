import React from 'react'
import downloadimg from '../assets/download.png'
import commentimg from '../assets/comment.png'
import { downloadImage } from '../utils';
import { useNavigate } from 'react-router-dom';
const Card = ({_id, username, prompt, photo}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/posts/${_id}`);
  }
  return (
    <div className='rounded-xl group relative shadow-card
    hover:shadow-cardhover card'>
      <img 
        className='w-full h-auto object-cover rounded-xl'
        src={photo}
        alt={prompt}
      />
      <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute
      bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
        <p className='text-white text-md overflow-y-auto prompt'>
          {prompt}
        </p>
        <div className='mt-5 flex justify-between items-center gap-2'>
          <div className='flex items-center gap-2'>
            <div className='w-7 h-8 rounded-full object-cover bg-green-700
            flex justify-center items-center text-white text-xs font-bold'>
              {username[0]}
            </div>
            <p className='text-white text-sm'>{username}</p>
          </div>
          <div className='flex gap-2'>
          <button type="button" onClick={handleClick}
            className='outline-none bg-transparent border-none'>
              <img src={commentimg} alt="download" className='w-6 h-6
              object-contain invert'/>
            </button>
            <button type="button" onClick={() => downloadImage(_id, photo)}
            className='outline-none bg-transparent border-none'>
              <img src={downloadimg} alt="download" className='w-6 h-6
              object-contain invert'/>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Card