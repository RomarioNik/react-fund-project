import { useState } from "react";
import { GlobalContext } from "./context";

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{ isSideBarOpen, openSideBar, closeSideBar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
