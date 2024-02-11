import React from 'react'
import "./AddNewUser.css"
function AddNewUser() {
  return (
    <div className='Category_container'> 
    <div>
        <h1>Add New User</h1>
    </div>
       <div className='AccTab_and_PermTab'>
        <button>Account</button>
        <button>Permissions</button>
       </div>
      <div>
        <h1>Category information</h1>
      </div>
      <div>
        <span>First Name:</span>
        <input type="text" placeholder='Name'/>
      </div>
      <div>
        <span>Email Address:</span>
        <input type="email" placeholder='Email'/>
      </div>
      <div>
        <span>Password:</span>
        <input type="password" placeholder='password'/>
      </div>
      <div>
        <span>Confirm Password:</span>
        <input type="password" placeholder='confirm password'/>
      </div>
    </div>
  )
}

export default AddNewUser
