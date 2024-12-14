import React from 'react';
import HomeIcon from '@mui/icons-material/Home'; // Import Home icon
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  // Function to handle navigation for Submit
  const handleSubmitClick = () => {
    navigate('/form1'); // Redirect to /form1
  };

  const handleHomeClick = () => {
    navigate('/home'); // Redirect to the Home page
  };

  const menuItems = [
    { icon: <HomeIcon />, label: 'Home', onClick: handleHomeClick }, // Home Section
    { icon: <PersonIcon />, label: 'Profile' },
    {
      icon: <PostAddIcon />,
      label: 'Submit',
      onClick: handleSubmitClick, // Assign navigation function
    },
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  return (
    <div className="sidebar">
      {/* Menu Items */}
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
