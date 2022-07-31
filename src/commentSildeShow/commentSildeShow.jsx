import './commentSildeShow.css'
import { FaChevronLeft,FaChevronRight,FaQuoteRight } from "react-icons/fa";
import reviews from './data';
import { useState } from 'react';


const CommentSlideShow = () => {
    const [index , setIndex]= useState(1);
    const{name,image,text,id} = reviews[index];

    return ( 
    <main>
        <div className="mycontiner">
            <div className="title text-center m-0 p-0">
                <h3 className=" fw-bolder text-center m-0 p-0">نظرات همکاران</h3>
            </div>
                <div className='myline'></div>

            <div className="reviews text-center m-4 rounded-2">
                <div className="reviews-img text-center">
                    <img src={image} alt="" />
                </div>
                <h5 className="author m-0 p-0">
                    {name}
                </h5>
                <p className="job text-danger fs-6 mb-4 p-0">طراح وب</p>
                <p className="info text-secondary">{text}</p>
                <div className="reviews-button">
                    <button className='btn btn-sm btn-light m-2' 
                    onClick={()=> {index<reviews.length-1?setIndex(index+1):setIndex(0)}}>
                        <FaChevronRight/>
                        </button>
                    <button className='btn btn-sm btn-light m-2' 
                    onClick={()=> {index>0 ?setIndex(index-1):setIndex(reviews.length-1)}}>
                        <FaChevronLeft/>
                    </button>
                </div>
                <button className='random-btn btn btn-sm btn-primary m-3'onClick={()=> {setIndex((Math.floor(Math.random()*reviews.length)))}}>
                    عشقی</button>
            </div>
        </div>
    </main> 
    );
}
 
export default CommentSlideShow;