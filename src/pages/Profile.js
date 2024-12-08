import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit3, Save } from 'lucide-react';
import './Profile.css';

function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+123 456 7890",
        address: "123 Main St, Cityville, USA"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <div className="profile-details">
                <div className="profile-item">
                    <User className="profile-icon" />
                    <label>Name:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{userDetails.name}</p>
                    )}
                </div>
                <div className="profile-item">
                    <Mail className="profile-icon" />
                    <label>Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{userDetails.email}</p>
                    )}
                </div>
                <div className="profile-item">
                    <Phone className="profile-icon" />
                    <label>Phone:</label>
                    {isEditing ? (
                        <input
                            type="tel"
                            name="phone"
                            value={userDetails.phone}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{userDetails.phone}</p>
                    )}
                </div>
                <div className="profile-item">
                    <MapPin className="profile-icon" />
                    <label>Address:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="address"
                            value={userDetails.address}
                            onChange={handleInputChange}
                        />
                    ) : (
                        <p>{userDetails.address}</p>
                    )}
                </div>
                <button className="edit-save-button" onClick={toggleEditMode}>
                    {isEditing ? (
                        <>
                            <Save className="button-icon" /> Save
                        </>
                    ) : (
                        <>
                            <Edit3 className="button-icon" /> Edit
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

export default Profile;
