import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar open/close

  // const handleSubmitClick = () => {
  //   navigate('/form1'); // Navigate to Submit
  // };

  // const handleHomeClick = () => {
  //   navigate('/home'); // Navigate to Home
  // };

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home' },
    { icon: <PersonIcon />, label: 'Profile' },
    { icon: <PostAddIcon />, label: 'Submit'},
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {/* Toggle Button - Only visible on small screens */}
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        ☰ {/* This is the hamburger icon */}
      </button>
      <div className="logo">
        <img src="./oric.svg" alt="Oric Logo" />
      </div> 
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item" onClick={item.onClick}>
            <div className="menu-icon">{item.icon}</div>
            <span className="menu-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
