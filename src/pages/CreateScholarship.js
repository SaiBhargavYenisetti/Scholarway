import React, { useState } from 'react';
import axios from 'axios';

function CreateScholarship() {
    const [scholarship, setScholarship] = useState({ name: '', description: '', amount: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setScholarship(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/scholarships', scholarship)
            .then(response => {
                alert('Scholarship created successfully!');
            })
            .catch(error => {
                console.error('There was an error creating the scholarship!', error);
            });
    };

    return (
        <div>
            <h1>Create Scholarship</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={scholarship.name} onChange={handleChange} placeholder="Scholarship Name" />
                <input type="text" name="description" value={scholarship.description} onChange={handleChange} placeholder="Description" />
                <input type="number" name="amount" value={scholarship.amount} onChange={handleChange} placeholder="Amount" />
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateScholarship;
