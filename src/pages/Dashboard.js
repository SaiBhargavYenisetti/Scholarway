import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircle, 
  GraduationCap, 
  FileText, 
  Settings, 
  LogOut, 
  Award, 
  ClipboardList, 
  Clock, 
  PlusCircleIcon
} from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <GraduationCap className="sidebar-logo" />
          <h2>Scholar Hub</h2>
        </div>
        
        <nav>
          <ul>
            <NavItem icon={<UserCircle />} to="/profile" label="Profile" />
            <NavItem icon={<PlusCircleIcon />} to="/Apply" label="Apply-Scholarship" />
            <NavItem icon={<Award />} to="/scholarships" label="Scholarships" />
            <NavItem icon={<FileText />} to="/applications" label="Applications" />
            <NavItem icon={<Settings />} to="/settings" label="Settings" />
            <NavItem icon={<LogOut />} to="/" label="Logout" className="logout-item" />
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, Scholar! Here's your scholarship overview.</p>
        </header>

        {/* Quick Stats */}
        <section className="stats-container">
          <StatCard 
            icon={<Award className="stat-icon blue" />} 
            title="Total Scholarships" 
            value="5" 
          />
          <StatCard 
            icon={<Clock className="stat-icon yellow" />} 
            title="Pending Applications" 
            value="2" 
          />
          <StatCard 
            icon={<ClipboardList className="stat-icon green" />} 
            title="Approved Scholarships" 
            value="3" 
          />
        </section>

        {/* Recent Activity */}
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <ActivityItem 
              date="10/11/2024" 
              description="Application for Scholarship A submitted" 
            />
            <ActivityItem 
              date="08/11/2024" 
              description="Application for Scholarship B approved" 
            />
            <ActivityItem 
              date="05/11/2024" 
              description="Updated profile information" 
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

// Reusable Navigation Item Component
function NavItem({ icon, to, label, className = '' }) {
  return (
    <li className={className}>
      <Link to={to} className="nav-item">
        {React.cloneElement(icon, { className: 'nav-icon' })}
        {label}
      </Link>
    </li>
  );
}

// Stat Card Component
function StatCard({ icon, title, value }) {
  return (
    <div className="stat-card">
      <div className="stat-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
      {icon}
    </div>
  );
}

// Activity Item Component
function ActivityItem({ date, description }) {
  return (
    <li className="activity-item">
      <span className="activity-description">{description}</span>
      <span className="activity-date">{date}</span>
    </li>
  );
}

export default Dashboard;