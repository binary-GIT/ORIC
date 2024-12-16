import React from 'react'
import "./About.css"
import Sidebar from '../../components/Sidebar/Sidebar'

const About = () => {
    return (
        <>
            <div className="about-page">
                <Sidebar />
                <div className="about-oric-container">
                    <h2 className="about-oric-title">ABOUT ORIC</h2>
                    <p className="about-oric-text">
                        fugiat magna nisi sunt esse et duis commodo cillum fugiat consequat
                        culpa ullamco nostrud tempor ad officia voluptate irure nulla commodo eu
                        occaecat exercitation in commodo do amet do deserunt. Excepteur
                        reprehenderit sit tempor ipsum laborum anim nulla laboris ex occaecat ad
                        nisi deserunt nostrud do elit aliqua exercitation proident.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About