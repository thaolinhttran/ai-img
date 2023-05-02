import React, {useState} from 'react'
import { FormField } from '../components'

const LogIn = ({setSignUp}) => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    }
    )

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

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
            name="email"
            value={form.email}
            placeholder="Email Address"
            handleChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Password"
            type="text"
            name="password"
            value={form.password}
            placeholder="Password"
            handleChange={handleChange}
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
          <button
          onClick={() => setSignUp(true)}
          className="font-inter font-small text-[13px]
           text-blue-900 py-2 rounded-md underline">
            No account? Sign Up here.
          </button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default LogIn