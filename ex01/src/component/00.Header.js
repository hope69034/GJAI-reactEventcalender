import { Link } from "react-router-dom";

function Header() {
  return (
    <>
   
        <Link className='HeaderLink' to="/"> Main | </Link>  
        <Link className='HeaderLink' to="/MobileMonthView"> MobileMonthView | </Link>
        <Link className='HeaderLink' to="/Responsive"> Responsive | </Link>
        <Link className='HeaderLink' to="/ContentCustomization"> ContentCustomization | </Link>
        <Link className='HeaderLink' to="/FullEventCustomization"> FullEventCustomization |</Link>
        <Link className='HeaderLink' to="/CustomizingTheHeader"> CustomizingTheHeader |</Link>
        <Link className='HeaderLink' to="/CustomEventTooltip"> CustomEventTooltip </Link>
    
    </>
  );
}
export default Header;
