import {useState} from 'react'
import eye from '../eye/red-eye.png'
import eyecl from '../eye/closed.svg'
import './pass.css'

function ShowAndHidePassword(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div className='pass'>
                <div className="upass passwords">
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" placeholder="Password" className='passinp'/>
                     <div onClick={togglePassword} className="eyebut">
                        {passwordType=="password"?<img src={eye} alt="" />:<img src={eyecl}/>}
                     </div>
                
            </div>
      </div>
      
    )

}
export default ShowAndHidePassword;