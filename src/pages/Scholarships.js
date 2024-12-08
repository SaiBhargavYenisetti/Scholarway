// Scholarships.js
import React from 'react';
import './Scholarships.css';

function Scholarships() {
    return (
        <div className="scholarships-container">
            <h2>Scholarships</h2>
            <div className="scholarship-list">
                <div className="scholarship-item">
                    <h3>Scholarship A</h3>
                    <p>Status: Approved</p>
                </div>
                <div className="scholarship-item">
                    <h3>Scholarship B</h3>
                    <p>Status: Pending</p>
                </div>
                <div className="scholarship-item">
                    <h3>Scholarship C</h3>
                    <p>Status: Rejected</p>
                </div>
            </div>
        </div>
    );
}

export default Scholarships;
