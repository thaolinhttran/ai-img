import React, {useState} from 'react'
import {Signup, LogIn} from '../components'

const Auth = () => {
    const [signup, setSignup] = useState(false);
  return (
    <div>
        {
            signup ? (<Signup setSignUp={setSignup}/>) : (<LogIn setSignUp={setSignup}/>)
        }
    </div>
  )
}

export default Auth