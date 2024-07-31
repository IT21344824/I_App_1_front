import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DBcallApi from '../../api/DBapi';
import { useNavigate } from 'react-router-dom';

const Regiser_comp = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log the form data to inspect it
        console.log("Form Data:", formData);

        try {
            const response = await DBcallApi('user/register', 'POST', formData);

            // Log the server response to inspect it
            console.log("Server Response:", response.data);

            if (response.data && response.data.user && response.data.user._id) {
                console.log("Sign Up Successful");
                // Redirect or show success message
                navigate('/SignIn');

            } else {
                console.error("Sign Up Failed");
            }

        } catch (error) {
            console.error(error.massage)
        }
    }


    return (
        <div>

            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign Up</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" method="POST">
                        <div className='flex justify-between gap-5'>
                            <div className='w-full'>
                                <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                <div class="mt-2">
                                    <input id="firstname" name="firstname" type="firstname" autocomplete="firstname" required
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                        class=" pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className='w-full'>
                                <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                <div class="mt-2">
                                    <input id="lastname" name="lastname" type="lastname" autocomplete="lastname" required
                                        value={formData.lastname}
                                        onChange={handleInputChange}
                                        class="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* <div>
                            <label for="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                            <div className="mt-2">
                                <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="confirmPassword" required className="pl-2 pr-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 value={formData.firstname}/>
                            </div>
                        </div> */}

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}>Create Account</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        All ready have an account?
                        <NavLink to={`/SignIn`}>
                            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Sign In </a>

                        </NavLink>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Regiser_comp
