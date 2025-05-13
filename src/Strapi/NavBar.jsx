import { useGlobalContext } from "./globalContext/useGlobalContext";
import { FaBars } from "react-icons/fa";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  const { openSideBar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <Logo />

        <NavLinks />

        <button type="button" className="toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};
