import { useGlobalContext } from "./globalContext/useGlobalContext";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from "../logo.svg";

export const SideBar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img className="logo" src={logo} alt="react" />
        <button type="button" className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <div>
              <a href={url}>
                {icon}
                {text}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <ul className="social-links">
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
