import React from 'react'
import {Link} from 'react-router-dom'
function LoginLink() {
  return (
      <>
    <div>
    <Link to='/login' >
        <input type="submit" value="Login" >
        </input></Link>
        </div></>
  )
}

export default LoginLink