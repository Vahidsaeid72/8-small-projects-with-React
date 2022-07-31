import { useEffect, useState } from 'react';
import Content from './Content';
import './ProgressBar.css'

const ProgressBar = () => {

    const [myWidth, setMyWidth ]= useState(0);


  const onScroll = ()=>{
    const windowScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (windowScroll/height) * 100 ;
    setMyWidth(scrolled);
  }

  useEffect(()=>{
    window.addEventListener("scroll", onScroll)
  },[])

    return ( 
    <>
            <div className="mycontiner">
            <div  className="myprogress" style={{width :`${myWidth}%`}}></div>
        </div>
        <Content/>
    </>
     );
}
 
export default ProgressBar;

//document.documentElement.scrollTop => mizane scroll man az balaye safe ro neshon mide
//document.documentElement.scrollHeight => mizane kole erefa safe ba ehtesab scroll ke mikhore
//document.documentElement.clientHeight => mizane ertefa safe browser mane 