import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!email) {
            setError('Email is required');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email address');
            return;
        }

        try {
            // Simulate API call (Replace this with your actual API call)
            setTimeout(() => {
                setMessage('Reset link sent successfully to your email');
                setEmail('');
            }, 1000);
        } catch (err) {
            setError('Failed to send reset link');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[90%] mx-auto max-w-md">
                <h2 className="text-2xl font-bold text-center text-[#0e86bdcf] mb-4">
                    Forgot Password
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-1">{error}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#0e86bdcf]  text-white font-semibold py-2 rounded-md transition duration-300"
                    >
                        Send Reset Link
                    </button>

                    {message && (
                        <p className="text-green-500 text-center mt-2">
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
