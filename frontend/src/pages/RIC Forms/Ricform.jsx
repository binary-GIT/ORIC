import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdPersonOutline } from 'react-icons/md';
import './RicForm.css';

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

  const [errors, setErrors] = useState({}); // To track validation errors
  const [isErrorVisible, setIsErrorVisible] = useState(false); // To control error visibility

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
    return email.includes('@'); // Basic check for '@'
  };

  // Form Submission Handler
  const handleSubmit = (e) => {
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

    // Form submission successful
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="oric-page-container">
      <Sidebar />
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
          <p>
            Please fill out all the required fields marked with a *.
          </p>
          <p>
            Click "Next" after completing the form to proceed. 
          </p>
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

          {[
            { key: 'researchGrantsSubmittedHEC', label: 'Number research grants Submitted to HEC Source *' },
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
            { key: 'industryLiaisonDeveloped', label: 'Number of Liaison Developed with UniversitYS Advance Studies & Research Board (AS&RB)' },
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
