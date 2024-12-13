import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useNavigate } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
  // State for managing collapse/expand
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();

  // Function to handle navigation for Submit
  const handleSubmitClick = () => {
    navigate('/form1'); // Redirect to /form1
  };

  const menuItems = [
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
    <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      {/* Toggle Button */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </div>

      {/* Menu Items */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {/* Wrap both icon and label in a parent div with onClick */}
            <div className="menu-link" onClick={item.onClick}>
              <div className="menu-icon">{item.icon}</div>
              {!isCollapsed && <span className="menu-label">{item.label}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;