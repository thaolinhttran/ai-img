import React, { useState } from 'react'
import {FormField, Loader} from '../components'
import {Nav} from '../components'

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchChange = () =>{

  }

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Welcome to CRAITE
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Enjoy a collection of imaginative and visually stunning images generated
          by DALL-E AI
        </p>
      </div>

      <div className='mt-16'>
        <FormField 
          LabelName="Search posts"
          type="text"
          name="text"
          placeholder="Search posts"
          value = {searchText}
          handleChange = {handleSearchChange}
        />
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  )
}

export default Home