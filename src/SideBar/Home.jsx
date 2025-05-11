import { useGlobalContext } from "./globalContext/useGlobalContext";
import { FaBars } from "react-icons/fa";
import { SideBar } from "./SideBar";
import { Modal } from "./Modal";
import "./SideBar.css";

export const Home = () => {
  const { openSideBar, openModalWindow } = useGlobalContext();

  return (
    <div>
      <button type="button" className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>

      <SideBar />

      <div className="content">
        <button className="btn" type="button" onClick={openModalWindow}>
          show modal
        </button>
        <Modal />
      </div>
    </div>
  );
};
