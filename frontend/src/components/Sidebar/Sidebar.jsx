import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { HiOutlineArrowsExpand } from "react-icons/hi";
import { VscOrganization } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  // Define menu items with their corresponding paths
  const menuItems = [
    { icon: <HomeIcon />, label: 'Home', path: '/home' },
    { icon: <PersonIcon />, label: 'Profile', path: '/home' },
    { icon: <PostAddIcon />, label: 'Submissions', path: '/form1' },
    { icon: <HiOutlineArrowsExpand />, label: 'About US', path: '/aboutus' },
    { icon: <VscOrganization />, label: 'Contact US', path: '/contact' },
    { icon: <ExitToAppIcon />, label: 'Logout', path: '/' },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="./oric.svg" alt="Oric Logo" />
      </div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="menu-item"
            onClick={() => navigate(item.path)} // Navigate to the item's path
          >
            <div className="menu-icon">{item.icon}</div>
            <span className="menu-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
