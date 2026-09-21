import React,{useState} from "react";
import {X,Mail,Lock} from "lucide-react";
import axios from "axios";
const Login=({onClose,onSignup,onLoginSuccess})=>{
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState("");
  const handleLogin=async(e)=>{
  e.preventDefault();
  try{
    const res=await axios.post("http://localhost:8080/user/login",{
      email,
      password
    });
    console.log(res.data);
    setMessage(res.data.message);
    // Save login token
    localStorage.setItem("token",res.data.token);
    // Save user information
    localStorage.setItem("user",JSON.stringify(res.data.user));
    onLoginSuccess();
  }catch(error){
    console.error(error);
    if(error.response){
      setMessage(error.response.data.message);
    }else{
      setMessage("Backend server is not responding");
    }
  }
};
  return(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-black">
          <X size={24}/>
        </button>
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-black">Login</h2>
          <p className="mt-2 text-sm text-gray-500">Login to your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3">
              <Mail size={20} className="text-gray-400"/>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <div className="flex items-center rounded-lg border border-gray-300 px-3">
              <Lock size={20} className="text-gray-400"/>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="w-full p-3 outline-none"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full rounded-lg bg-black py-3 font-semibold text-white hover:bg-gray-800">
            Login
          </button>
        </form>
        {message&&(
          <p className="mt-3 text-center text-sm">{message}</p>
        )}
        <div className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <button onClick={onSignup} className="font-semibold text-black underline">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;