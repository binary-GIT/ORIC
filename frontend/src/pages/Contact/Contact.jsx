import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdPersonOutline, MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Sidebar */}
            <div className="sidebar">
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Top Navigation Section */}
                <div className="oric-top-bar">
                    <div className="oric-search-bar">
                        <input
                            type="text"
                            placeholder="Search"
                            className="oric-search-input"
                        />
                    </div>
                    <div className="oric-user-profile">
                        <MdPersonOutline className="oric-icon" />
                        <div className="oric-user-info">
                            <span className="oric-user-name">Dr. Riaz</span>
                            <span className="oric-user-role">Director ORIC</span>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="contact-container">
                    <h2 className="contact-title">CONTACT US</h2>
                    <p className="contact-description">
                        Have questions or inquiries? Feel free to get in touch with us!
                    </p>

                    <div className="contact-form-section">
                        {/* Left Side: Contact Information */}
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <MdLocationOn className="contact-icon" />
                                <span>University Road, Karachi, Pakistan</span>
                            </div>
                            <div className="contact-info-item">
                                <MdPhone className="contact-icon" />
                                <span>+92 123 456 789</span>
                            </div>
                            <div className="contact-info-item">
                                <MdEmail className="contact-icon" />
                                <span>contact@ned.edu.pk</span>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="contact-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
