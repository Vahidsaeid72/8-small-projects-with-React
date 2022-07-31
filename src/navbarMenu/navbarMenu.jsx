import './navbarMenu.css';
import { FaBars,FaWindowClose } from "react-icons/fa";
import { FcLibrary } from "react-icons/fc";
import { useEffect, useRef, useState } from 'react';
import SocialMedia from './SocialMedia';


const NavbarMenu = () => {
   const [showLinks,SetShowLinks] = useState(false);
    const linksContinerRef = useRef();
    const linksRef = useRef();


    useEffect(()=>{
        const linkHeight = linksRef.current.getBoundingClientRect().height;
        if(showLinks){
            linksContinerRef.current.style.height = `${linkHeight}px`;
        }else{
            linksContinerRef.current.style.height = 0;
        }
    },[showLinks])



    return ( 
      <nav className="my_nav">
        <div className='myContainer'>
            <div className='nav_logo'>
                <button className='nav-toggle' onClick={()=>SetShowLinks(!showLinks)}>
                    {showLinks?<FaWindowClose className='w-100 h-100 text-danger'/>:<FaBars className='w-100 h-100 text-success'/>}
                </button>
                <a href="/" className='display-5'><FcLibrary/></a>
            </div>

            <div className='nav_links' ref={linksContinerRef}>
                <ul className="list pb-2" ref={linksRef}>
                    <li><a href='/'>خانه</a></li>
                    <li><a href='/'>درباره ما</a></li>
                    <li><a href='/'>تماس با ما</a></li>
                    <li><a href='/'>پروژه ها</a></li>
                </ul>
            </div>
                <SocialMedia/>
        </div>
      </nav>
   );
}
 
export default NavbarMenu;

