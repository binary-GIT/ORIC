import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdPersonOutline } from 'react-icons/md';
import './RicForm2.css';

const RICForm2 = () => {
  const [formData, setFormData] = useState({
    facultyName: '',
    departmentName: '',
    facultyEmail: '',
    ipDisclosures: '',
    patentsFiled: '',
    patentsGranted: '',
    licensingInitiations: '',
    licensesSigned: '',
    productsDeveloped: '',
    productsDisplayed: '',
    visitsByIndustry: '',
    agreementsSigned: '',
    awardsWon: '',
    trainingsArrangedByORIC: '',
    trainingsArrangedByOthers: '',
    researchPublications: '',
  });

  const [errors, setErrors] = useState({}); // Validation errors
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Show error

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Basic validation for alphabets only
    if (name === 'facultyName' || name === 'departmentName') {
      const alphabetRegex = /^[A-Za-z\s]*$/;
      if (!alphabetRegex.test(value)) {
        setErrors({ ...errors, [name]: 'Only alphabets are allowed' });
        return;
      }
    }

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

  const isEmailValid = (email) => email.includes('@');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = 'This field is required';
    });

    if (!isEmailValid(formData.facultyEmail)) {
      newErrors.facultyEmail = 'Email must include @';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsErrorVisible(true);
      setTimeout(() => setIsErrorVisible(false), 2000);
      return;
    }

    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="ric2-page-container">
      <Sidebar />
      <div className="ric2-form-container">
        <div className="ric2-top-bar">
        <div className="oric-search-bar">
            <input type="text" placeholder="Search" className="oric2-search-input" />
          </div>
          <div className="ric2-user-profile">
            <MdPersonOutline className="ric2-icon" />
            <div className="ric2-user-info">
              <span className="ric2-user-name">Dr. Riaz</span>
              <span className="ric2-user-role">Director ORIC</span>
            </div>
          </div>
        </div>

        <div className="ric2-form-instructions">
          <h3>Intellectual Property and Product Development</h3>
          <p>Please fill out all required fields marked with *.</p>
          <p>Click "Next" after completing the form to proceed. </p>
        </div>

        <form className="ric2-main-form" onSubmit={handleSubmit}>
          <div className="ric2-form-group">
            <label>Name of Faculty Member *</label>
            <input
              type="text"
              name="facultyName"
              value={formData.facultyName}
              onChange={handleInputChange}
            />
            {isErrorVisible && errors.facultyName && (
              <span className="ric2-error-message">{errors.facultyName}</span>
            )}
          </div>

          <div className="ric2-form-group">
            <label>Name of Department *</label>
            <input
              type="text"
              name="departmentName"
              value={formData.departmentName}
              onChange={handleInputChange}
            />
            {isErrorVisible && errors.departmentName && (
              <span className="ric2-error-message">{errors.departmentName}</span>
            )}
          </div>

          <div className="ric2-form-group">
            <label>Email Address of Faculty *</label>
            <input
              type="email"
              name="facultyEmail"
              value={formData.facultyEmail}
              onChange={handleInputChange}
            />
            {isErrorVisible && errors.facultyEmail && (
              <span className="ric2-error-message">{errors.facultyEmail}</span>
            )}
          </div>

          {[
            { key: 'ipDisclosures', label: 'Number of IP Disclosures Made with Patent Department / Patent Attorneys etc.' },
            { key: 'patentsFiled', label: 'Number of Patents / trademarks / design patent / copyrights, etc. FILED' },
            { key: 'patentsGranted', label: 'Number of Patents / trademarks / design patent / copyrights, etc. GRANTED' },
            { key: 'licensingInitiations', label: 'Number of IP Licensing Negotiations Initiated*' },
            { key: 'licensesSigned', label: 'Number of Non-Exclusive or Exclusive Licenses Signed *' },
            { key: 'productsDeveloped', label: 'Number of Product/Prototype developed*' },
            { key: 'productsDisplayed', label: 'Number of Products/Prototypes displayed' },
            { key: 'visitsByIndustry', label: 'Number of Visits by Representatives of Industry or Community Members Regarding Potential Research Subjects' },
            { key: 'agreementsSigned', label: 'Number of Agreements Signed for Collaboration with Industry, Government or Community' },
            { key: 'awardsWon', label: 'Number of National or International Honors or Awards Won *' },
            { key: 'trainingsArrangedByORIC', label: 'Number of  Trainings / Workshops / Seminars / Conferences Arranged by ORIC on Research, Innovation, & Commercialization etc. - for Faculty,  Researchers and Research Students' },
            { key: 'trainingsArrangedByOthers', label: 'Number of   Trainings / Workshops / Seminars / Conferences Arranged by other HEIs / National or International CB Partners on Research, Innovation, & Commercialization etc. - for Faculty,  Researchers and Research Students' },
            { key: 'researchPublications', label: 'Number of Research Publication' },
            ].map((field) => (
            <div className="ric2-form-group" key={field.key}>
              <label>{field.label} *</label>
              <select
                name={field.key}
                value={formData[field.key]}
                onChange={handleInputChange}
              >
                {renderSelectOptions()}
              </select>
              {isErrorVisible && errors[field.key] && (
                <span className="ric2-error-message">{errors[field.key]}</span>
              )}
            </div>
          ))}

          <button type="submit" className="ric2-submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RICForm2;
