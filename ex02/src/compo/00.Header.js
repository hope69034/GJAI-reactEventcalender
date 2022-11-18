import { Link } from "react-router-dom";

function Header() {
  return (
    <>
   
        <Link className='HeaderLink' to="/"> Timeline |</Link>
        <Link className='HeaderLink' to="/Calendar"> Calendar | </Link>
        <Link className='HeaderLink' to="/Mypage"> Mypage | </Link>  
        <Link className='HeaderLink' to="/Addbutton"> Addbutton |</Link>      
        <Link className='HeaderLink' to="/Testpage"> Testpage </Link>      
    </>
  );
}
export default Header;

