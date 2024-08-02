import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Profile_pg = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/user', {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                console.log(response)
                const result = await response.json();
                setUser(result);
                console.log(result)
            } catch (error) {
                console.error(error.message);
            }
        };

        if (token) {
            fetchUser();
        } else {
            navigate('/register');
        }
    }, [navigate, token]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-8 bg-white dark:bg-gray-800 dark:text-gray-100 dark:h-full'>
            <h1>Profile Page</h1>
            <p>First Name: {user.firstname}</p>
            <p>Last Name: {user.lastname}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile_pg;
