// Applications.js
import React from 'react';
import './Applications.css';

function Applications() {
    return (
        <div className="applications-container">
            <h2>Applications</h2>
            <div className="applications-list">
                <div className="application-item">
                    <h3>Application #1</h3>
                    <p>Status: Under Review</p>
                </div>
                <div className="application-item">
                    <h3>Application #2</h3>
                    <p>Status: Approved</p>
                </div>
            </div>
        </div>
    );
}

export default Applications;
