import React, { FormEvent, useState } from "react";


export default function RegisterPage({ router, onClose, setOpenLogin }) {
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const passwordwdh = formData.get("passwordwdh") as string;

    // Validate password confirmation
    if (password !== passwordwdh) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Send data to the server
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    if (response.ok) {
      alert("Registration successful!");
      onClose();
      setOpenLogin();
    } else {
      const errorData = await response.json();
      setErrorMessage(errorData.error || "Registration failed.");
    }
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">Registrieren</h2>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
          >
            Close
          </button>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Passwort"
            required
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="password"
            name="passwordwdh"
            placeholder="Passwort Wiederholung"
            required
            className="w-full p-2 mb-4 border rounded"
          />

          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Registrieren
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                setOpenLogin();
              }}
              className="px-4 py-2 ml-2 bg-gray-500 text-white rounded-lg hover:bg-pink-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
