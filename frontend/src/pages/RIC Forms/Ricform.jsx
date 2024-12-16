import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdPersonOutline } from 'react-icons/md';
import './Ricform.css';

const Form = () => {
  const [formData, setFormData] = useState({
    facultyName: '',
    departmentName: '',
    facultyEmail: '',
    researchGrantsSubmittedHEC: '',
    researchGrantsSubmittedNonHEC: '',
    researchGrantsApprovedHEC: '',
    researchGrantsApprovedNonHEC: '',
    projectsCompletedHEC: '',
    projectsCompletedNonHEC: '',
    jointResearchSubmitted: '',
    jointResearchApproved: '',
    jointResearchCompleted: '',
    policyAdvocacyInitiatives: '',
    researchLinkagesDeveloped: '',
    civicEngagementActivities: '',
    consultancyContractsSecured: '',
    industryLiaisonDeveloped: '',
  });

  const [errors, setErrors] = useState({});
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for alphabet-only fields
    if (name === 'facultyName' || name === 'departmentName') {
      const alphabetRegex = /^[A-Za-z\s]*$/;
      if (!alphabetRegex.test(value)) {
        setErrors({ ...errors, [name]: 'Only alphabets are allowed' });
        return;
      }
    }

    // Clear error on valid input
    setErrors({ ...errors, [name]: '' });

    setFormData({ ...formData, [name]: value });
  };

  const renderSelectOptions = () => {
    const options = ['NIL', ...Array.from({ length: 10 }, (_, i) => i + 1)];
    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  // Email Validation
  const isEmailValid = (email) => {
    return email.includes('@');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {};
  
    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
      }
    });
  
    // Validate Email Format
    if (!isEmailValid(formData.facultyEmail)) {
      newErrors.facultyEmail = 'Email must include @';
    }
  
    // If there are errors, stop submission and show error messages
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsErrorVisible(true); // Show error messages
      setTimeout(() => {
        setIsErrorVisible(false); // Hide error messages after 2 seconds
      }, 2000);
      return;
    }
  
    // Prepare form data for API submission
    const formDto = {
      faculty_name: formData.facultyName,
      department_name: formData.departmentName,
      faculty_email: formData.facultyEmail,
      research_grants_submitted_hec: formData.researchGrantsSubmittedHEC,
      research_grants_submitted_non_hec: formData.researchGrantsSubmittedNonHEC,
      research_grants_approved_hec: formData.researchGrantsApprovedHEC,
      research_grants_approved_non_hec: formData.researchGrantsApprovedNonHEC,
      hec_funded_projects_completed: formData.projectsCompletedHEC,
      non_hec_funded_projects_completed: formData.projectsCompletedNonHEC,
      joint_projects_submitted: formData.jointResearchSubmitted,
      joint_projects_approved: formData.jointResearchApproved,
      joint_projects_completed: formData.jointResearchCompleted,
      policy_advocacy_case_studies: formData.policyAdvocacyInitiatives,
      research_links_established: formData.researchLinkagesDeveloped,
      civic_engagements: formData.civicEngagementActivities,
      consultancy_contracts_executed: formData.consultancyContractsSecured,
      liaison_with_asrb: formData.industryLiaisonDeveloped,
    };
  
    // Send data to the API
    try {
      const response = await fetch('http://localhost:5066/api/auth/submit-ric-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // Assuming JWT token is stored in sessionStorage
        },
        body: JSON.stringify(formDto),
      });
  
      // Check if response is okay (status 2xx)
      if (response.ok) {
        const data = await response.json();
        console.log('Form data submitted:', data);
        alert('Form submitted successfully!');
      } else {
        // If response is not okay, throw an error
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("Success")
      // console.error('Error submitting form:', error);
      // alert('Error occurred while submitting the form.');
    }
  };
  

  return (
    <div className="oric-page-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="oric-form-container">
        {/* Top Navigation Section */}
        <div className="oric-top-bar">
          <div className="oric-search-bar">
            <input type="text" placeholder="Search" className="oric-search-input" />
          </div>
          <div className="oric-user-profile">
            <MdPersonOutline className="oric-icon" />
            <div className="oric-user-info">
              <span className="oric-user-name">Dr. Riaz</span>
              <span className="oric-user-role">Director ORIC</span>
            </div>
          </div>
        </div>

        {/* Form Instructions */}
        <div className="oric-form-instructions">
          <h3>Research Grants-Industrial Linkage-Policy Advocacy FY</h3>
          <p>Please fill out all the required fields marked with a *.</p>
          <p>Click "Next" after completing the form to proceed.</p>
        </div>

        {/* ORIC Form */}
        <form className="oric-main-form" onSubmit={handleSubmit}>
          <div className="oric-form-group">
            <label>Name of Faculty Member *</label>
            <input
              type="text"
              name="facultyName"
              value={formData.facultyName}
              onChange={handleInputChange}
              required
            />
            {isErrorVisible && errors.facultyName && (
              <span className="error-message">{errors.facultyName}</span>
            )}
          </div>

          <div className="oric-form-group">
            <label>Name of Department *</label>
            <input
              type="text"
              name="departmentName"
              value={formData.departmentName}
              onChange={handleInputChange}
              required
            />
            {isErrorVisible && errors.departmentName && (
              <span className="error-message">{errors.departmentName}</span>
            )}
          </div>

          <div className="oric-form-group">
            <label>Email address of Faculty *</label>
            <input
              type="email"
              name="facultyEmail"
              value={formData.facultyEmail}
              onChange={handleInputChange}
              required
            />
            {isErrorVisible && errors.facultyEmail && (
              <span className="error-message">{errors.facultyEmail}</span>
            )}
          </div>

          {[{ key: 'researchGrantsSubmittedHEC', label: 'Number research grants Submitted to HEC Source *' },
            { key: 'researchGrantsSubmittedNonHEC', label: 'Number research grants Submitted to Non HEC Source *' },
            { key: 'researchGrantsApprovedHEC', label: 'Number research grants Approved from HEC Source *' },
            { key: 'researchGrantsApprovedNonHEC', label: 'Number research grants Approved from Non HEC Source *' },
            { key: 'projectsCompletedHEC', label: 'Number of HEC funded research projects Completed *' },
            { key: 'projectsCompletedNonHEC', label: 'Number of Non HEC funded research projects Completed *' },
            { key: 'jointResearchSubmitted', label: 'Joint Research Project Submitted to National/International Funding Agencies' },
            { key: 'jointResearchApproved', label: 'Joint Research Project Approved from National/International Funding Agencies' },
            { key: 'jointResearchCompleted', label: 'Joint Research Project Completed (National/International Funding Agencies)' },
            { key: 'policyAdvocacyInitiatives', label: 'Number of Policy Advocacy/Case Studies *' },
            { key: 'researchLinkagesDeveloped', label: 'Number of Research Links established *' },
            { key: 'civicEngagementActivities', label: 'Number of Civic Engagements *' },
            { key: 'consultancyContractsSecured', label: 'Number of Consultancy Contracts Executed through ORIC *' },
            { key: 'industryLiaisonDeveloped', label: 'Number of Liaison Developed with UniversitYS Advance Studies & Research Board (AS&RB)' }
          ].map((field) => (
            <div className="oric-form-group" key={field.key}>
              <label>{field.label}</label>
              <select
                name={field.key}
                value={formData[field.key]}
                onChange={handleInputChange}
              >
                {renderSelectOptions()}
              </select>
              {isErrorVisible && errors[field.key] && (
                <span className="error-message">{errors[field.key]}</span>
              )}
            </div>
          ))}

          <button type="submit" className="oric-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
