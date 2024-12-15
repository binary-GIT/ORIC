import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MdPersonOutline } from "react-icons/md";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate(); // React Router's hook for navigation

    return (
        <div className="home-container">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="main-content">
                {/* Top Navigation Section */}
                <div className="top-bar">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                    </div>
                    <div className="user-profile">
                        <MdPersonOutline className="icon" />
                        <div className="user-info">
                            <span className="user-name">Dr.Riaz</span>
                            <span className="user-role">Director ORIC</span>
                        </div>
                    </div>
                </div>
                {/* Welcome Section */}
                <header className="welcome-section">
                    <div className="welcome-text">
                        <h2>Welcome back, USER!</h2>
                        <p>
                            Welcome to ORIC Data Portal, a platform that ensures streamline the
                            submission and management of your research papers, offering a
                            centralized space to showcase your work and collaborate with peers.
                        </p>
                    </div>
                    <div className="welcome-image">
                        <img
                            src="welcome-section.png"
                            alt="Welcome Graphic"
                            className="welcome-graphic"
                        />
                    </div>
                </header>

                {/* Forms Section */}
                <section className="form-section">
                    <h3>Want To Submit Your Paper?</h3>
                    <div className="form-cards">
                        <div
                            className="card"
                            onClick={() => navigate("/form1")} // Replace with your desired path
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && navigate("/form1")}
                        >
                            <h4>RIC Form # 1</h4>
                            <p>Submission of your Research Paper</p>
                        </div>
                        <div
                            className="card"
                            onClick={() => navigate("/form2")} // Replace with your desired path
                            role="button"
                            tabIndex={0}
                            onKeyPress={(e) => e.key === 'Enter' && navigate("/form2")}
                        >
                            <h4>RIC Form # 2</h4>
                            <p>Submission of Your Grant</p>
                        </div>
                        <div className="card">
                            <h4>RIC Form # 3</h4>
                            <p>Handled by ORIC Team</p>
                        </div>
                    </div>
                </section>

                {/* ORIC Team Section */}
                <section className="oric-team">
                    <h3>ORIC Team</h3>
                    <div className="team-cards">
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Dr. Riaz Uddin" />
                            </div>
                            <h4>Dr. Riaz Uddin</h4>
                            <p>Director ORIC</p>
                        </div>
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Dr. Saeeda Nadir Ali" />
                            </div>
                            <h4>Dr. Saeeda Nadir Ali</h4>
                            <p>Manager - Tech. Transfer and Univ. Industrial Linkage</p>
                        </div>
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Dr. Muhammad Uzair" />
                            </div>
                            <h4>Dr. Muhammad Uzair</h4>
                            <p>Manager - Research Operation and Development</p>
                        </div>
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Dr. Sundus Ali" />
                            </div>
                            <h4>Dr. Sundus Ali</h4>
                            <p>Manager - Business Incubation</p>
                        </div>
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Dr. Ashar Ahmed" />
                            </div>
                            <h4>Dr. Ashar Ahmed</h4>
                            <p>Manager - Intellectual Property</p>
                        </div>
                        <div className="card">
                            <div className="profile-avatar">
                                <img src="profile.jpeg" alt="Mr. Imran Ahmed" />
                            </div>
                            <h4>Mr. Imran Ahmed</h4>
                            <p>Asst. Manager ORIC</p>
                        </div>
                    </div>
                </section>

                <div className="oric-vision-aim">
                    <h3>ORIC Vision & Aim</h3>
                    <p>
                        ORIC aims to foster innovation, promote research and development, and
                        contribute to creating a vibrant, entrepreneurial ecosystem within the
                        community.
                    </p>
                    <p>
                        Our vision is to create a culture of innovation and entrepreneurship by
                        connecting industry with academia and driving positive social impact.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
