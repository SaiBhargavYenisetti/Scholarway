import React from 'react';
import { Trash2 } from 'lucide-react';
import './DeleteScholarships.css';

function DeleteScholarships() {
    return (
        <div className="delete-scholarships-container">
            <h2>Delete Scholarships</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search scholarships..." />
            </div>
            <div className="scholarship-list">
                {/* List of scholarships would be mapped here */}
                <div className="scholarship-item">
                    <span>Scholarship A</span>
                    <button>Delete</button>
                </div>
                <div className="scholarship-item">
                    <span>Scholarship B</span>
                    <button>Delete</button>
                </div>
                {/* More scholarships... */}
            </div>
        </div>
    );
}

export default DeleteScholarships;
