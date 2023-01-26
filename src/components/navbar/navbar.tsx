import { Link } from 'react-router-dom'
import classes from './navbar.module.css'
import { IoBookSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navDiv}>
                <IoBookSharp className={classes.icon} size={40}/>
                <div className={classes.linksContainer}>
                    <Link to={'/books'} className={classes.links}>BOOKS</Link>
                    <Link to={'/cart'} className={classes.links}>MY CART</Link>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;