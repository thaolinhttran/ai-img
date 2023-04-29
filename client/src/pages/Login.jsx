import React from 'react'
import { FormField } from '../components'
import { Link } from 'react-router-dom'
const handleSubmit = () => {

}

const Login = () => {
  return (
    <section className='max-w-2xl mx-auto'>
      <div className='bg-white border border-[#e6ebf4] rounded-2xl'>
        <h1 className='flex justify-center px-5 font-bold text-[26px] mt-14'>
          Hello! Welcome back.
        </h1>
        <p className='flex justify-center px-5 font-normal text-sm mt-1 mb-10'>
          Let your creativity flows.
        </p>
        <div className='px-24 lg:px-10'>
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
            className='bg-[#39AEA9] w-full my-5 rounded-md py-2 font-bold text-white'>
              LOGIN
            </button>
          </div>
          <div className='mb-14'>
          <Link to='/sign-up' 
          className="font-inter font-small text-[13px]
           text-blue-900 py-2 rounded-md underline">
            No account? Sign Up here.
          </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login