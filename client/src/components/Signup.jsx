import React, {useState} from 'react'
import { FormField } from '../components'
import { useNavigate } from 'react-router-dom';

const Signup = ({setSignUp}) => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        location: "",
        artstyle: "",
        email: "",
        password: "",
        posts:[],
        likedposts:[],
    }
    )
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch('https://craite.onrender.com/register',{
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify(form)
            })

            const data = await response.json();
            if(data.success){
              setSignUp(false);
            }

        }
        catch(err){
            alert(err);
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    return (
    <section className='max-w-2xl mx-auto'>
      <div className='bg-white border border-[#e6ebf4] rounded-2xl'>
          <h1 className='flex justify-center px-5 font-bold text-[26px] mt-14 mb-5'>
          Join the CRAITE family!
        </h1>
        <div className='px-5 lg:px-10'>
          <div className='flex justify-around sm:gap-3 gap-5 lg:gap-10 mb-5'>
            <div className='w-full'>
            <FormField
            LabelName="First Name"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            handleChange={handleChange}
            />
            </div>
            <div className='w-full'>
            <FormField
            LabelName="Last Name"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            handleChange={handleChange}
            />
            </div>
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Location"
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            handleChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Art Styles"
            type="text"
            name="artstyle"
            placeholder="Your favorite art styles"
            value={form.artstyle}
            handleChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Email Address"
            type="text"
            name="email"
            placeholder="Email Address"
            value={form.email}
            handleChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <FormField
            LabelName="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            handleChange={handleChange}
            />
          </div>
          <div>
            <button 
            onClick={handleSubmit}
            className='bg-[#616161] hover:bg-[#8a8989] w-full mb-3 mt-3 rounded-md py-2 font-bold text-white'>
              REGISTER
            </button>
          </div>
          <div className='mb-14'>
          <button
          onClick={() => setSignUp(false)}
          className="font-inter font-small text-[13px]
           text-blue-900 hover:text-slate-500 py-2 rounded-md underline">
            Already have an account? Log In here.
          </button>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Signup