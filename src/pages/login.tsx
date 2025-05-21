import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Step 1

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Step 2

  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email && password) {
      console.log("Logging in:", email);
      setLoggedIn(true);
      navigate("/home"); // Step 3: Redirect after login
    }
  };

  const handleLogout = () => {
    setEmail("");
    setPassword("");
    setLoggedIn(false);
    navigate("/"); // Optional: return to login on logout
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[900px] h-[500px] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-b from-blue-500 to-blue-900 text-white flex flex-col justify-center items-center p-10 relative">
          <h1 className="text-3xl font-bold mb-4">GoFinance</h1>
          <p className="text-sm mb-6">The most popular peer to peer lending at SEA</p>
          <button className="bg-white text-blue-600 px-5 py-2 rounded-full text-sm font-semibold">Read More</button>
          <div className="absolute bottom-4 left-4 w-40 h-40 border border-blue-300 rounded-full opacity-20"></div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-white flex flex-col justify-center p-12">
          {loggedIn ? (
            <>
              <h2 className="text-2xl font-semibold mb-4">Welcome, {email}!</h2>
              <p className="text-gray-600 mb-8">You're now logged in.</p>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 rounded-full font-semibold w-full hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-1">Hello Again!</h2>
              <p className="text-sm text-gray-500 mb-8">Welcome Back</p>

              <form onSubmit={handleSubmit}>
                <input
                  onChange={onChangeEmailHandler}
                  value={email}
                  type="email"
                  placeholder="Email Address"
                  className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none"
                />
                <input
                  onChange={onChangePasswordHandler}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="mb-4 px-4 py-2 border border-gray-300 rounded-full w-full focus:outline-none"
                />
                <button className="bg-blue-600 text-white py-2 rounded-full font-semibold w-full hover:bg-blue-700 transition">
                  Login
                </button>
                <a href="#" className="text-sm text-blue-600 text-center mt-4 hover:underline block">
                  Forgot Password
                </a>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
