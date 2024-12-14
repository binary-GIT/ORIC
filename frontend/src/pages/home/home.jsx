import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./home.css";

const Home = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <header className="header">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="user-profile">
            <div className="user-details">
              <span className="user-name">John Doe</span>
              <span className="user-year">3rd year</span>
            </div>
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="profile-image"
            />
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="welcome-box">
            <h3>{formattedDate}</h3>
            <h1>Welcome back, USER!</h1>
            <p>Always stay updated in your student portal</p>
          </div>
          <div className="welcome-image">
            <img
              src="https://via.placeholder.com/200"
              alt="Welcome"
            />
          </div>
        </section>

        {/* Finance Section */}
        <section className="finance-section">
          <h2>Finance</h2>
          <div className="finance-cards">
            <div className="finance-card">
              <h3>$10,000</h3>
              <p>Total Payable</p>
            </div>
            <div className="finance-card">
              <h3>$5,000</h3>
              <p>Total Paid</p>
            </div>
            <div className="finance-card">
              <h3>$300</h3>
              <p>Others</p>
            </div>
          </div>
        </section>

        {/* Enrolled Courses */}
        <section className="courses-section">
          <h2>Enrolled Courses</h2>
          <div className="course-card-container">
            <div className="course-card">
              <h3>Object Oriented Programming</h3>
              <button className="view-button">View</button>
            </div>
            <div className="course-card">
              <h3>Fundamentals of Database Systems</h3>
              <button className="view-button">View</button>
            </div>
          </div>
        </section>

        {/* Notices Section */}
        <section className="notices-section">
          <div className="notices-header">
            <h2>Daily Notice</h2>
            <a href="#see-all" className="see-all">
              See all
            </a>
          </div>
          <div className="notice-card">
            <h3>Prelim Payment Due</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#more">See more</a>
          </div>
          <div className="notice-card">
            <h3>Exam Schedule</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#more">See more</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
