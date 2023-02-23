import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {

  }, []);

  return (
    <div>
      <img  className="nav__avatar" src={process.env.PUBLIC_URL+"\Netflix-avatar.png"} alt="avatar"></img>
      <img  className="nav__logo" src={process.env.PUBLIC_URL+"/netflix-logo.png"}   alt="netflix"></img>
    </div>
   
  );
};

export default Navbar;
