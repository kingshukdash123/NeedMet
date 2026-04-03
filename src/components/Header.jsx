import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../style/Header.css";
import companyLogo from '../assets/companyLogo.png';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticked, setSticked] = useState(false);
  const bottomRef = useRef(null);
  const logoClick = () => navigate('/');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setSticked(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    // Observe the top section
    const topSection = document.querySelector(".header-top");
    if (topSection) observer.observe(topSection);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── TOP SECTION: scrolls away ── */}
      <div className="header-top">
        <div className="logo" onClick={logoClick}>
          <img src={companyLogo} alt="logo" />
          <h2>NeedMet</h2>
        </div>
        <div className="header-top-actions">
          <button className="btn-outline">Newsletter sign up</button>
          <button className="btn-filled">Donate</button>
        </div>
      </div>

      {/* ── BOTTOM SECTION: sticks to top ── */}
      <div className="header-bottom" ref={bottomRef}>
        <div className="header-bottom-inner">

          {/* Logo — only visible when sticked */}
          <div className={`logo logo-sticky ${sticked ? "visible" : ""}`} onClick={logoClick}>
            <img src={companyLogo} alt="logo" />
            <span>NeedMet</span>
          </div>

          <nav className={`nav ${menuOpen ? "active" : ""}`}>
            <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/all_categories" className="nav-link" onClick={() => setMenuOpen(false)}>Categories</NavLink>
            <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          </nav>

          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>

          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span><span></span><span></span>
          </div>

        </div>
      </div>
    </>
  );
}