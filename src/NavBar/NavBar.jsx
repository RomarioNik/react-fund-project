import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { SocialLinks } from "./SocialLinks";
import { links, social } from "./data";
// import logo from "./logo.svg";
import "./NavBar.css";

export const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((preState) => !preState);
  };

  const linksStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : `0px`,
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Logo />
          <button type="button" className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          // ref={linksContainerRef}
          style={linksStyles}
        >
          <Menu links={links} ref={linksRef} />
        </div>

        <SocialLinks social={social} />
      </div>
    </nav>
  );
};
