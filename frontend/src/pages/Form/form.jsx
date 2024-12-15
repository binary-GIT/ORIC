import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import './Form.css';

function GoogleForm() {
  const [formData, setFormData] = useState({
    facultyName: '',
    department: '',
    email: '',
    grantsSubmittedHEC: '',
    grantsSubmittedNonHEC: '',
    grantsApprovedHEC: '',
    grantsApprovedNonHEC: '',
    projectsCompletedHEC: '',
    projectsCompletedNonHEC: '',
    jointResearchSubmitted: '',
    jointResearchApproved: '',
    jointResearchCompleted: '',
    policyAdvocacy: '',
    researchLinks: '',
    civicEngagements: '',
    consultancyContracts: '',
    liaisonDeveloped: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <div className="instructions">
            <h3>Instructions:</h3>
            <ul>
              <li>Please fill out all the required fields marked with a <strong>*</strong>.</li>
              <li>Ensure the data you provide is accurate to the best of your knowledge.</li>
              <li>Click "Next" after completing the form to proceed.</li>
            </ul>
          </div>
          <div className="form-container">
            <h2>RIC Form-1: Research Grants-Industrial Linkage-Policy Advocacy FY: 2024-25 </h2>
            <form>
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

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email address of Faculty *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="grantsSubmittedHEC">Number of Research Grants Submitted to HEC Source</label>
                  <select
                    id="grantsSubmittedHEC"
                    name="grantsSubmittedHEC"
                    value={formData.grantsSubmittedHEC}
                    onChange={handleInputChange}
                  >
                    <option value="NIL">NIL</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add similar rows for other fields */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="projectsCompletedHEC">Projects Completed from HEC Source</label>
                  <select
                    id="projectsCompletedHEC"
                    name="projectsCompletedHEC"
                    value={formData.projectsCompletedHEC}
                    onChange={handleInputChange}
                  >
                    <option value="NIL">NIL</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="projectsCompletedNonHEC">Projects Completed from Non-HEC Source</label>
                  <select
                    id="projectsCompletedNonHEC"
                    name="projectsCompletedNonHEC"
                    value={formData.projectsCompletedNonHEC}
                    onChange={handleInputChange}
                  >
                    <option value="NIL">NIL</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="jointResearchSubmitted">Joint Research Proposals Submitted</label>
                  <select
                    id="jointResearchSubmitted"
                    name="jointResearchSubmitted"
                    value={formData.jointResearchSubmitted}
                    onChange={handleInputChange}
                  >
                    <option value="NIL">NIL</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="jointResearchApproved">Joint Research Proposals Approved</label>
                  <select
                    id="jointResearchApproved"
                    name="jointResearchApproved"
                    value={formData.jointResearchApproved}
                    onChange={handleInputChange}
                  >
                    <option value="NIL">NIL</option>
                    {[...Array(10)].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Add other fields as needed */}

              <div className="form-group">
                <button type="submit">Next</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleForm;
