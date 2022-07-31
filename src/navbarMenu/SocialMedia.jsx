import { FaFacebook,FaYoutube,FaGithubSquare,FaTwitterSquare } from "react-icons/fa";
import './navbarMenu.css';

const SocialMedia = () => {
    return ( 
    <ul className='nav_social'>
        <li><a className='text-primary fs-4' href="/"><FaTwitterSquare/></a></li>
        <li><a className='text-danger fs-4' href="/"><FaYoutube/></a></li>
        <li><a className='text-primary fs-4' href="/"><FaFacebook/></a></li>
        <li><a className='text-light fs-4' href="/"><FaGithubSquare/></a></li>
    </ul>
     );
}
 
export default SocialMedia;