import React from 'react';
import { Edit } from 'lucide-react';
import './EditScholarships.css';

function EditScholarships() {
    return (
        <div className="edit-scholarships-container">
            <h2>Edit Scholarships</h2>
            <div className="search-bar">
                <input type="text" placeholder="Search scholarships..." />
            </div>
            <div className="scholarship-list">
                {/* List of scholarships would be mapped here */}
                <div className="scholarship-item">
                    <span>Scholarship A</span>
                    <button>Edit</button>
                </div>
                <div className="scholarship-item">
                    <span>Scholarship B</span>
                    <button>Edit</button>
                </div>
                {/* More scholarships... */}
            </div>
        </div>
    );
}

export default EditScholarships;
