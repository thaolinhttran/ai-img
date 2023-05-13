import React, {useState, useContext} from 'react'
import {Signup, LogIn} from '../components'
const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div>
        {
            signUp ? (<Signup setSignUp={setSignUp} />) : (<LogIn setSignUp={setSignUp} />)
        }
    </div>
  )
}

export default Auth