import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home' },
    { icon: <PersonIcon />, label: 'Profile' },
    { icon: <PostAddIcon />, label: 'Submit' },
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./oric.svg" alt="Oric Logo" />
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <div className="menu-icon">{item.icon}</div>
            <span className="menu-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
