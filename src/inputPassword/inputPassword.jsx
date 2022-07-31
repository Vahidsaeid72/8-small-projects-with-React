import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import './inputPassword.css';


const InputPassword = () => {

const [hide , setHide]=useState(false);

const showHide = ()=>{
  setHide(!hide)
}

  return ( 
  <div class="my_container d-flex justify-content-center align-items-center">
    <div className="myinputBox d-flex align-items-center p-2">
      <span className="fs-5 cursorPointer" onClick={showHide}>{hide?<FaRegEye/>:<FaRegEyeSlash/>}</span>
      <input  type={hide?'password':'text'} className="bg-light"/>
    </div>
   </div> 
  );
}
 
export default InputPassword;