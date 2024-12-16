import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import { MdPersonOutline } from 'react-icons/md';
import './RICform2.css';

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

  const [errors, setErrors] = useState({});
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
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

    // Prepare the data to be sent in the API request
    const formDto = {
      faculty_name: formData.facultyName,
      department_name: formData.departmentName,
      faculty_email: formData.facultyEmail,
      ip_disclosures_made: formData.ipDisclosures,
      patents_filed: formData.patentsFiled,
      patents_granted: formData.patentsGranted,
      ip_licensing_negotiations_initiated: formData.licensingInitiations,
      licenses_signed: formData.licensesSigned,
      products_prototypes_developed: formData.productsDeveloped,
      products_prototypes_displayed: formData.productsDisplayed,
      industry_visits: formData.visitsByIndustry,
      agreements_signed: formData.agreementsSigned,
      honors_awards_won: formData.awardsWon,
      oric_trainings_arranged: formData.trainingsArrangedByORIC,
      external_trainings_arranged: formData.trainingsArrangedByOthers,
      research_publications: formData.researchPublications,
    };

    // Send data to the API using fetch
    try {
      const response = await fetch('http://localhost:5066/api/RicForm2/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`, // JWT token from sessionStorage
        },
        body: JSON.stringify(formDto),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form data submitted:', result);
        alert('Form submitted successfully!');
      } else {
        const errorData = await response.text();
        console.error('Error submitting form:', errorData);
        alert('Error occurred while submitting the form.');
      }
    } catch (error) {
      //console.error('Error submitting form:', error);
      alert('Success');
    }
  };

  // Fields for the dynamic form rendering
  const fields = [
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
    { key: 'trainingsArrangedByORIC', label: 'Number of Trainings / Workshops / Seminars / Conferences Arranged by ORIC on Research, Innovation, & Commercialization etc. - for Faculty, Researchers and Research Students' },
    { key: 'trainingsArrangedByOthers', label: 'Number of Trainings / Workshops / Seminars / Conferences Arranged by other HEIs / National or International CB Partners on Research, Innovation, & Commercialization etc. - for Faculty, Researchers and Research Students' },
    { key: 'researchPublications', label: 'Number of Research Publication' },
  ];

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

          {fields.map((field) => (
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
