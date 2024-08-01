import React, { useState } from 'react';
import axios from 'axios';

const Upload_pg = () => {
    const [file, setFile] = useState(null);
    const [firstname, setFirstname] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("firstname", firstname);

        try {
            const response = await axios.post('http://localhost:5000/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert("File uploaded successfully");
        } catch (error) {
            console.error("There was an error uploading the file!", error);
            alert("Error uploading file");
        }
    };

    return (
        <div className='mt-5'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className="py-6 px-9" onSubmit={handleUpload}>
                        <div className="mb-6">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Firstname
                            </label>
                            <input
                                type="text"
                                name="firstname"
                                value={firstname}
                                onChange={e => setFirstname(e.target.value)}
                                className="w-full rounded-md border border-[#e0e0e0] py-2 px-4 text-base outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>
                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload File
                            </label>


                            <div class="space-y-8 font-[sans-serif]  max-w-md mx-auto">
                                <input type="file"
                                    onChange={e => setFile(e.target.files[0])}
                                    className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" />

                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="mt-3 hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Send File
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Upload_pg;
