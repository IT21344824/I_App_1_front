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
        <div className='flex flex-col items-center justify-center pt-8 bg-white dark:bg-gray-800 dark:text-gray-100 h-full '>
        

            <div class="bg-white overflow-hidden shadow rounded-lg border max-w-2xl">
                <div class="px-4 py-5 sm:px-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        User Profile
                    </h3>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500">
                        This is some information about the user.
                    </p>
                </div>
                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                    <dl class="sm:divide-y sm:divide-gray-200">
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                First name :
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.firstname}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Last Name :
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.lastname}
                            </dd>
                        </div>
                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Email Address :
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {user.email}
                            </dd>
                        </div>
                        {/* <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Address
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                123 Main St<br />
                                Anytown, USA 12345
                            </dd>
                        </div> */}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Profile_pg;
