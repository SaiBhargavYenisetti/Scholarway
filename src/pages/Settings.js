// Settings.js
import React from 'react';
import './Settings.css';

function Settings() {
    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <div className="settings-options">
                <div className="settings-item">
                    <label>Notification Preferences</label>
                    <input type="checkbox" /> Enable notifications
                </div>
                <div className="settings-item">
                    <label>Dark Mode</label>
                    <input type="checkbox" /> Enable dark mode
                </div>
                <div className="settings-item">
                    <button className="save-button">Save Changes</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
