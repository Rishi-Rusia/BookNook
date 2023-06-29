import "./Navbar.css";

import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="nav-header">
        <div id="csi-logo">
          <img src={Logo} alt="csi-logo" />
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul className="menu">
          <li>
            <a href="#one" className="link link-theme link-arrow">
              Home
            </a>
          </li>
          <li>
            <a href="#two" className="link link-theme link-arrow">
              Team
            </a>
          </li>
          <li>
            <a href="#three" className="link link-theme link-arrow">
              Events
            </a>
          </li>
          <li>
            <a href="#four" className="link link-theme link-arrow">
              Stories
            </a>
          </li>
          <li>
            <a href="#five" className="link link-theme link-arrow">
              About
            </a>
          </li>
          <li>
            <a href="#six" className="bg-join link-theme link-arrow">
              Join Us
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
