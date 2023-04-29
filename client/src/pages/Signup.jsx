import React from 'react'
import { FormField } from '../components'
import { Link } from 'react-router-dom'
const handleSubmit = () => {

}

const Signup = () => {
  return(
  <section className='max-w-2xl mx-auto'>
      <div className='bg-white border border-[#e6ebf4] rounded-2xl'>
          <h1 className='flex justify-left px-5 font-bold text-[26px] mt-14 mb-5'>
          Welcome to CRAITE!
        </h1>
        <div className='px-5 lg:px-10'>
          <div className='flex justify-around sm:gap-3 gap-5 lg:gap-10 mb-5'>
            <div className='w-full'>
            <FormField
            LabelName="First Name"
            type="text"
            name="text"
            placeholder="First Name"
            />
            </div>
            <div className='w-full'>
            <FormField
            LabelName="First Name"
            type="text"
            name="text"
            placeholder="First Name"
            />
            </div>
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Location"
            type="text"
            name="text"
            placeholder="Location"
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Art Styles"
            type="text"
            name="text"
            placeholder="Your favorite art styles"
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Email Address"
            type="text"
            name="text"
            placeholder="Email Address"
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Password"
            type="text"
            name="text"
            placeholder="Password"
            />
          </div>
          <div>
            <button 
            onClick={handleSubmit}
            className='bg-[#39AEA9] w-full mb-3 mt-3 rounded-md py-2 font-bold text-white'>
              REGISTER
            </button>
          </div>
          <div className='mb-14'>
          <Link to='/log-in' 
          className="font-inter font-small text-[13px]
           text-blue-900 py-2 rounded-md underline">
            Already have an account? Log In here.
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup