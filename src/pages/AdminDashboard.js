import React from 'react';
import { Plus, Edit, Trash2, User, FilePlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
    return (
        <div className="admin-dashboard-container">
            <aside className="admin-sidebar">
                <h2>Admin Panel</h2>
                <nav>
                    <ul>
                        <li><User size={20} /> <Link to="/manage-users">Manage Users</Link></li>
                        <li><FilePlus size={20} /> <Link to="/create-scholarship">Create Scholarship</Link></li>
                        <li><Edit size={20} /> <Link to="/edit-scholarships">Edit Scholarships</Link></li>
                        <li><Trash2 size={20} /> <Link to="/delete-scholarships">Delete Scholarships</Link></li>
                        <li><Plus size={20} /> <Link to="/add-admins">Add Admins</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-main-content">
                <h1>Welcome, Admin!</h1>
                <p>Manage scholarships, users, and system settings from this dashboard.</p>
                <div className="admin-widgets">
                    <div className="admin-widget">
                        <h3>Total Scholarships</h3>
                        <p>15</p>
                    </div>
                    <div className="admin-widget">
                        <h3>Total Users</h3>
                        <p>120</p>
                    </div>
                    <div className="admin-widget">
                        <h3>Pending Approvals</h3>
                        <p>5</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
