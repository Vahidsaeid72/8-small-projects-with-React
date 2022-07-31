import { useState } from "react";
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";


const Question = ({id,title,info}) => {
    const[showInfo,setShowInfo]=useState(false);


    return ( 
    <div className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn btn-dark rounded-circle" onClick={()=>setShowInfo(!showInfo)}>{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        </header>
        {showInfo && <p>{info}</p>}
    </div> 
    );
}
 
export default Question;