import '../../App.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <div className='App'>
            <Link to={'/'}>Home</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
            <Link to={'/aboutus'}>About Us</Link>
        </div>
    );
};