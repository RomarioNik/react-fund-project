import { ToastContainer } from "react-toastify";
import "./App.css";
// import { BirthdayBuddy } from "./BirthdayBuddy/BirthdayBuddy";
// import { Tours } from "./Tours/Tours";
// import { Reviews } from "./Reviews/Reviews";
// import { AlternativeReviews } from "./Reviews/AlternativeReviews";
// import { Accordion } from "./Accordion/Accordion";
// import { Menu } from "./Menu/Menu";
// import { Tabs } from "./Tabs/Tabs";
// import { Slider } from "./Slider/Slider";
// import { SlickCarousel } from "./Slider/SlickCarousel";
// import { Lorem } from "./Lorem/Lorem";
// import { ColorGenerator } from "./ColorGenerator/ColorGenerator";
// import { GroceryBud } from "./GroceryBud/GroceryBud";
// // import { NavBar } from "./NavBar/NavBar";
// import { Home } from "./SideBar/Home";
// import { AppProvider } from "./SideBar/globalContext/AppProvider";
import { Strapi } from "./Strapi/Strapi";
import { AppProvider } from "./Strapi/globalContext/AppProvider";

function App() {
  return (
    <main>
      {/* <BirthdayBuddy /> */}
      {/* <Tours /> */}
      {/* <Reviews /> */}
      {/* <AlternativeReviews /> */}
      {/* <Accordion /> */}
      {/* <Menu /> */}
      {/* <Tabs /> */}
      {/* <Slider /> */}
      {/* <SlickCarousel /> */}
      {/* <Lorem /> */}
      {/* <ColorGenerator /> */}
      {/* <GroceryBud /> */}
      {/* <NavBar /> */}
      {/* <AppProvider>
        <Home />
      </AppProvider> */}
      <AppProvider>
        <Strapi />
      </AppProvider>

      <ToastContainer position="top-right" />
    </main>
  );
}

export default App;
