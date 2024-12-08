import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import './AddAdmins.css';

function AddAdmins() {
    const [email, setEmail] = useState('');

    const handleAddAdmin = () => {
        // Logic for adding admin here
        console.log(`Admin added with email: ${email}`);
    };

    return (
        <div className="add-admins-container">
            <h2>Add Admins</h2>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter admin's email"
                    required
                />
            </div>
            <button onClick={handleAddAdmin}>Add Admin</button>
        </div>
    );
}

export default AddAdmins;
