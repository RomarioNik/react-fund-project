import { useGlobalContext } from "./globalContext/useGlobalContext";
import { FaTimes } from "react-icons/fa";
import { Menu } from "./Menu";
import { sublinks } from "./data";

export const SideBar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();

  return (
    <aside className={isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" type="button" onClick={closeSideBar}>
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {sublinks.map((item) => (
            <Menu key={item.pageId} {...item} />
          ))}
        </div>
      </div>
    </aside>
  );
};
