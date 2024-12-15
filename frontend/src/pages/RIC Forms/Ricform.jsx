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
            <label>Faculty Member Name *</label>
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
            <label>Department Name *</label>
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
            <label>Faculty Email Address *</label>
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
            { key: 'researchGrantsSubmittedHEC', label: 'HEC Research Grants Submitted' },
            { key: 'researchGrantsSubmittedNonHEC', label: 'Non-HEC Research Grants Submitted' },
            { key: 'researchGrantsApprovedHEC', label: 'HEC Research Grants Approved' },
            { key: 'researchGrantsApprovedNonHEC', label: 'Non-HEC Research Grants Approved' },
            { key: 'projectsCompletedHEC', label: 'HEC Projects Completed' },
            { key: 'projectsCompletedNonHEC', label: 'Non-HEC Projects Completed' },
            { key: 'jointResearchSubmitted', label: 'Joint Research Projects Submitted' },
            { key: 'jointResearchApproved', label: 'Joint Research Projects Approved' },
            { key: 'jointResearchCompleted', label: 'Joint Research Projects Completed' },
            { key: 'policyAdvocacyInitiatives', label: 'Policy Advocacy Initiatives' },
            { key: 'researchLinkagesDeveloped', label: 'Research Linkages Developed' },
            { key: 'civicEngagementActivities', label: 'Civic Engagement Activities' },
            { key: 'consultancyContractsSecured', label: 'Consultancy Contracts Secured' },
            { key: 'industryLiaisonDeveloped', label: 'Industry Liaison Developed' },
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
