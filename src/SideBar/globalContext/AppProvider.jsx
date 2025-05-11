import { useState } from "react";
import { GlobalContext } from "./context";

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSideBar = () => {
    setIsSidebarOpen(true);
  };

  const closeSideBar = () => {
    setIsSidebarOpen(false);
  };

  const openModalWindow = () => {
    setIsModalOpen(true);
  };

  const closeModalWindow = () => {
    setIsModalOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSideBar,
        closeSideBar,
        openModalWindow,
        closeModalWindow,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
