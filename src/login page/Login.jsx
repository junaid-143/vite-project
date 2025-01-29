import { useState } from 'react';
import './Login.css';
import { Input } from '../components/ui/input';

function Login() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 ">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-[60px] font-bold mb-4">Login</h1>
        <p className="text-gray-600 mb-4 text-xs">
          Enter your phone number below to login to your account
        </p>
        <Input
  type="email"
  placeholder="Enter your phone number"
  className="w-full px-4 py-2 rounded-[6px] text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 !border-none"
/>
<Input
  type="password"
  placeholder="Enter your password"
  className="w-full px-4 py-2 rounded-[6px] text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 !border-none"
/>

        <button className="w-full bg-[#BFB2FF] text-white py-2 rounded-[6px] hover:bg-[#BFB2FF] mb-4">
          Login
        </button>
        <p className="text-gray-600 mb-4 text-xs">
          Don't have an account? <a href="#" className='text-[blue]'> Sign up now</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
