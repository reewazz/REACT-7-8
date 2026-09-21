
import React, { useState } from "react";
import { X, User, Mail, Lock } from "lucide-react";
import axios from "axios";
const Signup = ({ onClose, onLogin, onSignupSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [message, setMessage] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!fullName.trim()) {
      setMessage("Error: Full Name is required");
      return;
    }
    if (!email.trim()) {
      setMessage("Error: Email is required");
      return;
    }
    if (!password.trim()) {
      setMessage("Error: Password is required");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      if (avatar) {
        formData.append("avatar", avatar);
      }
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Selected file:", avatar);
      console.log("FormData file:", formData.get("avatar"));
      const res = await axios.post(
        "http://localhost:8080/user/create",
        formData
      );
      console.log("Signup Response:", res.data);
      // Email already exists
      if (res.data === "Email already exists") {
        setMessage("Error: This email already exists");
        return;
      }
      // Account created successfully
      setMessage("Account created successfully!");
      // Save login information
      localStorage.setItem("token", "signup-success");
      localStorage.setItem("user", JSON.stringify(res.data.user));
      // Tell Navbar that signup was successful
      onSignupSuccess();
      // Clear form
      setFullName("");
      setEmail("");
      setPassword("");
      setAvatar(null);
    } catch (error) {
      console.error("Signup Error:", error);
      if (error.response) {
        console.log("Backend Error:", error.response.data);
        if (error.response.data?.message) {
          setMessage( error.response.data.message);
        } else {
          setMessage(error.response.data);
        }
      } else if (error.request) {
        setMessage(
          "Error: Backend server is not responding. Check your backend server."
        );
      } else {
        setMessage(error.message);
      }
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black"
        >
          <X size={24} />
        </button>
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-black">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Create your account to continue
          </p>
        </div>
        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Full Name
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3">
              <User size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Email
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3">
              <Mail size={20} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>
          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3">
              <Lock size={20} className="text-gray-400" />
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>
          {/* Profile Photo */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Profile Photo
            </label>
            <div className="flex items-center gap-4 rounded-lg border border-gray-300 p-3">
              {/* Preview */}
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-yellow-500 bg-gray-100">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User size={30} className="text-gray-400" />
                )}
              </div>
              {/* Choose Photo */}
              <label className="cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-yellow-400 hover:bg-gray-800">
                Choose Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      console.log("Selected image:", file);
                      setAvatar(file);
                    }
                  }}
                />
              </label>
            </div>
          </div>
          {/* Message */}
          {message && (
            <p className="text-center text-sm font-medium text-red-600">
              {message}
            </p>
          )}
          {/* Create Account */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800"
          >
            Create Account
          </button>
        </form>
        {/* Login */}
        <div className="mt-5 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={onLogin}
            className="font-semibold text-black underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
