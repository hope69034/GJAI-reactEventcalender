import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <Link className='HeaderLink' to="/"> Main </Link>  
        <Link className='HeaderLink' to="/Calender"> Calender </Link>
        <Link className='HeaderLink' to="/Scheduling"> Scheduling </Link>
        <Link className='HeaderLink' to="/Timeline"> Timeline </Link>
        <Link className='HeaderLink' to="/Agenda"> Agenda </Link>
      </div>
    </>
  );
}
export default Header;
