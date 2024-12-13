import "../Navbar/Navbar.css"
import { FaUserCircle } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src="/oric.png" alt="not loaded yet" />
          <h1>Oric Data Portal, NEDUET</h1>
        </div>
        <div className="navbar-right">
          <h1>Hello, Syed Sumam</h1>
          <h1>
            <FaUserCircle />
          </h1>
        </div>
      </nav>
  
    </>
  );
}