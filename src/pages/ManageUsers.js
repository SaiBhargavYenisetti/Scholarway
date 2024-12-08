import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ManageUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching the list of users from backend
        axios.get('/api/users')
            .then(response => {
                setUsers(response.data.users);
            })
            .catch(error => {
                console.error('There was an error fetching the users!', error);
            });
    }, []);

    return (
        <div>
            <h1>Manage Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}

export default ManageUsers;
