import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';



const LoginPage = ({ router, onClose, setOpenRegister }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering on the server
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/profile');
      } else {
        const error = await response.json();
        alert(error.error || 'Login failed!');
      }
    } catch (err) {
      console.error('Login failed:', err);
      alert('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">Login</h2>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            aria-label="Close Login Modal"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full p-2 mb-4 border rounded"
            aria-label="Username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-2 mb-4 border rounded"
            aria-label="Password"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Login
            </button>
            <button
              type="button"
              onClick={setOpenRegister}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-pink-600  ml-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
