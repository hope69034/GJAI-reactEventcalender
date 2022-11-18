import { Link } from "react-router-dom";

function Header() {
  return (
    <>
   
        <Link className='HeaderLink' to="/"> Main | </Link>  
        <Link className='HeaderLink' to="/Calendar"> Calendar | </Link>
        <Link className='HeaderLink' to="/Timeline"> Timeline </Link>
    
    </>
  );
}
export default Header;
