import React, { useState, useRef } from 'react';
import axios from 'axios';

const Upload_pg = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState("");
    const [file, setFile] = useState(null);
    const [name, setName] = useState("");
    const fileInputRef = useRef(null);

    const handleSubmit = async (event) => {
        // Prevent default form submission
        event.preventDefault(); 

        if (!name) {
            alert("Please enter a name");
            return;
        }

        if (!file) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();

        // Append the name & file
        formData.append('image', file);
        formData.append('name', name); 

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/imgUpload/uploadImage", formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setUrl(res.data);
            alert("Image uploaded successfully");

            // Reset the inputs
            setFile(null);
            setName("");
            // Reset the file input
            fileInputRef.current.value = null; 
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='pt-5 bg-white dark:bg-gray-800 dark:text-gray-100 dark:h-full '>
            <div className="flex items-center justify-center p-12">
                <div className=" w-1/3">
                    <form className="py-6  bg-slate-50 shadow-md rounded px-8 pt-6 pb-8  dark:rounded dark:bg-gray-400" onSubmit={handleSubmit}>
                        <div className="mb-6 pt-4">
                            <div className="mb-6">
                                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-md border border-[#e0e0e0] py-2 px-4 text-base outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Image Upload File
                            </label>
                            <div className="space-y-8 font-[sans-serif] max-w-md mx-auto">
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-3 hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                {loading ? 'Uploading...' : 'Send File'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Upload_pg;
