import { Link, NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
    return (
        <ul>
            <li><NavLink className="active" to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/books">books</NavLink></li>
        </ul>

    )
}

export default Header;