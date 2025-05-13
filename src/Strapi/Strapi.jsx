import { SideBar } from "./SideBar";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { SubMenu } from "./SubMenu";
import "./Strapi.css";

export const Strapi = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <SideBar />
      <SubMenu />
    </div>
  );
};
