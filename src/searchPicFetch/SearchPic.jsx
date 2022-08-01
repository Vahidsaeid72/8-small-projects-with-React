import { useState } from 'react';
import  './SearchPic.css';


const SearchPic = () => {
    const[value , setValue]= useState("");
    const[myResult , setMyResult] =useState();

    const fetchItem =() =>{
        fetch(`https://api.unsplash.com/search/photos/?client_id=Cx_o-mePkEowfXaZL1guaPlrBzAGmy5iPFDSjP5knK8&query=${value}`)
        .then(res => res.json())
        .then(data => {
            setMyResult(data.results)
        })
    }

    return ( 
    <div>
        <div className="header d-flex justify-content-around py-4 shadow">
            <span className='text-secondary fw-bolder fs-5'>جستوجو</span>
            <input  className='input-group w-25 p-2' type="text" value={value} onChange={(e)=>{setValue(e.target.value)}}/>
            <button onClick={fetchItem} className="btn btn-danger px-4">ارسال</button>
        </div>
        <div className="gallery d-flex justify-content-center align-items-center flex-wrap mt-3">
            {myResult && myResult.map((pic) => (
                <img key={pic.id} className='w-25' src={pic.urls.regular} alt="" />
            ))}
            

        </div>

    </div> 
    );
}
 
export default SearchPic;