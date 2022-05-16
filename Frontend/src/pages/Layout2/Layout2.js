import React,{useEffect, useState} from "react";

// Importing Section
import Navbar from "../../component/Navbar/NavBar";

import Section from "./Section";
import Services from "../../component/Services";
import Pricing from "../../component/Pricing";
import Team from "../../component/Team";
import Clients from "../../component/Clients";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer/Footer";

function Layout2() {

  const [navClass, setNavClass] = useState("navbar-light");
  const [imgLight, setImgLight] = useState(true);

  const [navItems,setNavItems] = useState([
        { id: 1, idnm: "home", navheading: "Home" },
        { id: 2, idnm: "services", navheading: "Services" },
        { id: 3, idnm: "team", navheading: "Team" },
        { id: 5, idnm: "contact", navheading: "Contact" },
  ]);
  
  const [pos,setPos] = useState(document.documentElement.scrollTop);    
  const [fixTop,setFixTop] = useState(true);


  useEffect(()=> {
      window.addEventListener("scroll", scrollNavigation, true);
    return ()=>{
      window.removeEventListener("scroll", scrollNavigation, true);
    }
  });
  
  const scrollNavigation = () =>{
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > pos) {
      setNavClass("nav-sticky");
      setImgLight(false);
    } 
    else {
      setNavClass("navbar-light");
      setImgLight(true);
    }
  };
  
  return (
    <React.Fragment >
        {/* Importing Navbar */}
        <Navbar
          navItems={navItems}
          navClass={navClass}
          imglight={imgLight}
          top={fixTop}
        />

        {/* Importing Section */}
        <Section />

         {/* Importing Service */}
         <Services />

        {/* Importing Pricing */}
        <Pricing />

        {/* Importing Team */}
        <Team />

        {/* Importing Contact Us */}
        <Contact />

        {/* Importing Footer */}
        <Footer />
    </React.Fragment>
  );
}

export default Layout2