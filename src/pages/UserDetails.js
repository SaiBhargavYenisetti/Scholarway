import React, { useState } from "react";
import UserService from "../services/UserService";

const UserDetails = () => {
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState(null);

    const handleFetch = () => {
        UserService.getUser(userId)
            .then((response) => setUser(response.data))
            .catch(() => alert("Error fetching user details."));
    };

    return (
        <div>
            <h1>User Details</h1>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button onClick={handleFetch}>Fetch Details</button>
            {user && (
                <div>
                    <h3>User Info:</h3>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
