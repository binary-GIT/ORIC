import React from 'react'
import "./form3.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

const Form3 = () => {
    return (
        <>
            <div className="layout">
                <Sidebar />
                <div className="main-content">
                    <Navbar />
                    <div className="instructions">
                    {/*    <h3>Instructions:</h3>
                        <ul>
                            <li>Please fill out all the required fields marked with a <strong>*</strong>.</li>
                            <li>Ensure the data you provide is accurate to the best of your knowledge.</li>
                            <li>Click "Submit" after completing the form.</li>
                        </ul> */}
                    </div>
                    <div className="form-container">
                        <h2>RIC Form-3: Completed by ORIC Team FY: 2024-25</h2>
                        <p>(01st July 2024 to 30th Sept 2024)</p>
                        <p>Oric Team will handle this page.</p>
                    </div>
                </div>
            </div>
        </>     
  )
}

export default Form3;
