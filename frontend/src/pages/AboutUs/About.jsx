import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="about-oric-container">
                <h2 className="about-oric-title">ABOUT ORIC</h2>
                <p className="about-oric-text">
                    NED University is ranked W category in ORIC Ranking by HEC for 2021-22.<br />
                    NEDUET is among the top 5 W category universities (Out of 73 HEIs/Universities).<br />
                    Ranking Features of ORIC - NED University among Top 5 W Category Universities are:
                </p>
                <div className="list-container">
                    <div className="list-item">
                        NED University Ranks 1st in Human Resources and Operations
                    </div>
                    <div className="list-item">
                        NED University Ranks 1st in Research Excellence (Highest among all)
                    </div>
                    <div className="list-item">
                        NED University Ranks 1st in Sustainability and Capacity Building
                    </div>
                    <div className="list-item">
                        NED University Ranks 5th in Innovation and Commercialization
                    </div>
                    <div className="list-item">
                        NED University shares overall Top 3rd Rank in ORIC Scorecard
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
