import React, { useState } from 'react';
import { FileText, Search, Upload } from 'lucide-react';
import './Apply.css';

function ApplyScholarship() {
  const [formData, setFormData] = useState({
    scholarshipName: '',
    scholarshipType: '',
    applicationField: '',
    personalStatement: '',
    documents: []
  });

  const scholarshipTypes = [
    'Merit-Based', 
    'Need-Based', 
    'Field-Specific', 
    'Minority Scholarship', 
    'International Student Scholarship'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prevState => ({
      ...prevState,
      documents: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement scholarship application submission logic
    console.log('Scholarship Application Submitted:', formData);
    // You would typically send this data to a backend service
  };

  return (
    <div className="apply-scholarship-container">
      <header className="apply-header">
        <FileText className="header-icon" />
        <h1>Apply for Scholarship</h1>
        <p>Fill out the application form carefully</p>
      </header>

      <form className="scholarship-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="scholarshipName">Scholarship Name</label>
          <div className="input-wrapper">
            <Search className="input-icon" />
            <input 
              type="text" 
              id="scholarshipName" 
              name="scholarshipName"
              placeholder="Enter scholarship name"
              value={formData.scholarshipName}
              onChange={handleInputChange}
              required 
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="scholarshipType">Scholarship Type</label>
          <select 
            id="scholarshipType" 
            name="scholarshipType"
            value={formData.scholarshipType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Scholarship Type</option>
            {scholarshipTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="applicationField">Field of Study</label>
          <input 
            type="text" 
            id="applicationField" 
            name="applicationField"
            placeholder="Your field of study"
            value={formData.applicationField}
            onChange={handleInputChange}
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="personalStatement">Personal Statement</label>
          <textarea 
            id="personalStatement" 
            name="personalStatement"
            placeholder="Write your personal statement here"
            value={formData.personalStatement}
            onChange={handleInputChange}
            rows="5"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="documents">
            <Upload className="upload-icon" />
            Upload Supporting Documents
          </label>
          <input 
            type="file" 
            id="documents" 
            name="documents"
            multiple
            onChange={handleFileUpload}
            className="file-input"
          />
          {formData.documents.length > 0 && (
            <div className="file-list">
              {formData.documents.map((file, index) => (
                <div key={index} className="file-item">
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <button type="submit" className="submit-btn">
          Submit Scholarship Application
        </button>
      </form>
    </div>
  );
}

export default ApplyScholarship;