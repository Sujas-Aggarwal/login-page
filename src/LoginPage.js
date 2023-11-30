import React from 'react'
import './LoginPage.css'
function LoginPage() {
    const checkBox=()=>{
        const checkbox = document.getElementById("show-pass")
        const pass = document.getElementById("password")
        if (checkbox.checked){
            pass.type = "text"
        }
        else{
            pass.type = "password"
        }
    }
  return (
    <div className='background-div'> 
        <div className="main-card">
             <form>
                <label aria-hidden="true">Welcome Back</label>
                <input type="text" name="Name" id="name" placeholder='Username' required=""/>
                <input type="password" name="Password" id="password" placeholder='Password' required=""/>
                <div id='show-pass-div'><input type="checkbox" name="visible" id="show-pass" onClick={()=>{checkBox()}}/>Show Password</div>
                <input type="submit" value="Login" id='sub-button'/>

             </form>
        </div>
    </div>
  )
}

export default LoginPage
