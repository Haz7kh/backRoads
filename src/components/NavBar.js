import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";

const NavBar = () => {
  const [scroll, setScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={scroll ? "scrolled-nav" : "navbar"}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backRoads" />
          <button className="nav-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className={showMenu ? "nav-links show-links" : "nav-links"}>
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
      </div>
    </nav>
  );
};

export default NavBar;
