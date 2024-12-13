import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./Form.css";

const Form2 = () => {
  const [formData, setFormData] = useState({
    facultyName: "",
    department: "",
    email: "",
    ipDisclosures: "NIL",
    patentsFiled: "NIL",
    patentsGranted: "NIL",
    ipNegotiations: "NIL",
    licensesSigned: "NIL",
    prototypesDeveloped: "NIL",
    prototypesDisplayed: "NIL",
    industryVisits: "NIL",
    collaborationAgreements: "NIL",
    honorsAwards: "NIL",
    oricTrainings: "NIL",
    externalTrainings: "NIL",
    researchPublications: "NIL",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form submitted successfully!");
  };

  const renderSelectOptions = () => (
    <>
      <option value="NIL">NIL</option>
      {[...Array(10)].map((_, i) => (
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      ))}
    </>
  );

  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>Please fill out all the required fields marked with a <strong>*</strong>.</li>
            <li>Ensure the data you provide is accurate to the best of your knowledge.</li>
            <li>Click "Submit" after completing the form.</li>
          </ul>
        </div>
        <div className="form-container">
          <h2>RIC Form-2: Intellectual Property, Capacity Building, and Research Publication FY: 2024-25</h2>
          <p>(01st July 2024 to 30th Sept 2024)</p>
          <form onSubmit={handleSubmit}>
            {/* Text Inputs */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="facultyName">Name of Faculty Member *</label>
                <input
                  type="text"
                  id="facultyName"
                  name="facultyName"
                  value={formData.facultyName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="department">Name of Department *</label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address of Faculty *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Select Inputs */}
            {[
              ["ipDisclosures", "Number of IP Disclosures Made with Patent Department / Patent Attorneys etc. *"],
              ["patentsFiled", "Number of Patents / Trademarks / Design Patent / Copyrights, etc. FILED *"],
              ["patentsGranted", "Number of Patents / Trademarks / Design Patent / Copyrights, etc. GRANTED *"],
              ["ipNegotiations", "Number of IP Licensing Negotiations Initiated *"],
              ["licensesSigned", "Number of Non-Exclusive or Exclusive Licenses Signed *"],
              ["prototypesDeveloped", "Number of Product/Prototype Developed *"],
              ["prototypesDisplayed", "Number of Product/Prototype Displayed *"],
              ["industryVisits", "Number of Visits by Representatives of Industry or Community Members Regarding Potential Research Subjects *"],
              ["collaborationAgreements", "Number of Agreements Signed for Collaboration with Industry, Government or Community *"],
              ["honorsAwards", "Number of National or International Honors or Awards Won *"],
              ["oricTrainings", "Number of Trainings / Workshops / Seminars / Conferences Arranged by ORIC *"],
              ["externalTrainings", "Number of Trainings / Workshops / Seminars / Conferences by other HEIs *"],
              ["researchPublications", "Number of Research Publications *"],
            ].map(([field, label]) => (
              <div className="form-group" key={field}>
                <label htmlFor={field}>{label}</label>
                <select
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                >
                  {renderSelectOptions()}
                </select>
              </div>
            ))}

            <div className="form-group">
              <button type="submit">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
