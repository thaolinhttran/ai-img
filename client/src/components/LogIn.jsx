import React, {useState, useContext} from 'react'
import { FormField } from '../components'
import { UserContext } from '../components/UserContext'

const LogIn = ({setSignUp}) => {
  const { setIsLoggedIn } = useContext(UserContext);
    const [form, setForm] = useState({
        email: "",
        password: ""
    }
    )

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
          const response = await fetch('https://craite.onrender.com/login-user', {
            method: "POST",
            headers: {
              'Content-Type' : 'application/json',
            },
            body: JSON.stringify(form)
          })

          const data = await response.json();
          if(data.status =="ok"){
            alert("Login successful");
            setIsLoggedIn(true);
            window.localStorage.setItem("token", data.data);
            window.location.href="../"
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
            type="password"
            name="password"
            value={form.password}
            placeholder="Password"
            handleChange={handleChange}
            />
          </div>
          <div>
            <button 
            onClick={handleSubmit}
            className='bg-[#616161] hover:bg-[#8a8989] w-full my-5 rounded-md py-2 font-bold text-white'>
              LOGIN
            </button>
          </div>
          <div className='mb-14'>
          <button
          onClick={() => setSignUp(true)}
          className="font-inter font-small text-[13px]
           text-blue-900 py-2 rounded-md underline hover:text-slate-500">
            No account? Sign Up here.
          </button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default LogIn