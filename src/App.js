import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Scholarships from './pages/Scholarships';
import Applications from './pages/Applications';
import Settings from './pages/Settings';
import Apply from './pages/Apply';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ManageUsers from './pages/ManageUsers';
import CreateScholarship from './pages/CreateScholarship';
import EditScholarships from './pages/EditScholarships';
import DeleteScholarships from './pages/DeleteScholarships';
import AddAdmins from './pages/AddAdmins';
import UserDetails from "./pages/UserDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} /> 
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/scholarships" element={<Scholarships />} />
                <Route path="/applications" element={<Applications />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/Apply" element={<Apply />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/manage-users" element={<ManageUsers />} />
                        <Route path="/create-scholarship" element={<CreateScholarship />} />
                        <Route path="/edit-scholarships" element={<EditScholarships />} />
                        <Route path="/delete-scholarships" element={<DeleteScholarships />} />
                        <Route path="/add-admins" element={<AddAdmins />} />
                        <Route path="/user-details" element={<UserDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
