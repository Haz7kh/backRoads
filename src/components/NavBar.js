import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // add this state variable

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <nav className={scroll ? "scrolled-nav" : "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backRoads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* regular nav links */}
        <ul className="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        {/* social icons */}
        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return (
              <li key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={social.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>

        {/* mobile nav links */}
        {isMobileMenuOpen && (
          <ul className="nav-links-mobile">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link-mobile">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
