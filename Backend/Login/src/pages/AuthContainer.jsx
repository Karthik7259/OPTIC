import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

export default function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-300">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        {isLogin ? <Login /> : <Signup />}
        <div className="text-center mt-4">
          <button
            className="text-indigo-600 hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}