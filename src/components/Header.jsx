import { NavLink, useNavigate } from "react-router-dom";
import "../style/Header.css";

export default function Header() {
  
  const navigate = useNavigate();
  const logoClick = () => {
    navigate('/')
  }
  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo */}
        <div className="logo">
          <span className="logo-dot"></span>
          <h2 onClick={logoClick}>NeedMate</h2>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/categories" className="nav-link">
            Categories
          </NavLink>

          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </nav>

        {/* Profile */}
        {/* <div className="profile">
          K
        </div> */}

      </div>
    </header>
  );
}