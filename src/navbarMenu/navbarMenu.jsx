import './navbarMenu.css';
import { FaBars,FaWindowClose } from "react-icons/fa";
import { FcLibrary } from "react-icons/fc";
import { useState } from 'react';
import {links,socials} from './data';
import { FaFacebook,FaFirefoxBrowser,FaGithubSquare,FaTwitterSquare } from "react-icons/fa";

const NavbarMenu = () => {
   const [showLinks,SetShowLinks] = useState(false);

    return ( 
      <nav className="my_nav">
        <div className='myContainer'>
            <div className='nav_logo'>
                <button className='nav-toggle' onClick={()=>SetShowLinks(!showLinks)}>
                    {showLinks?<FaWindowClose className='w-100 h-100 text-danger'/>:<FaBars className='w-100 h-100 text-success'/>}
                </button>
                <a href="/" className='display-5'><FcLibrary/></a>
            </div>
            <div className={`nav_links ${showLinks?'showlink':''}`}>
                <ul className="list">
                    {links.map((link) =>(
                        <li key ={link.id}>
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <ul className='nav_social'>
                <li className='text-primary fs-4'><FaTwitterSquare/></li>
                <li className='text-danger fs-4'><FaFirefoxBrowser/></li>
                <li className='text-primary fs-4'><FaFacebook/></li>
                <li className='text-dark fs-4'><FaGithubSquare/></li>
            </ul>
        </div>
      </nav>
   );
}
 
export default NavbarMenu;

