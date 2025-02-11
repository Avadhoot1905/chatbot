'use client';

import React from 'react';

const SignInPage: React.FC = () => {
  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        onClick={handleGoogleSignIn} 
        className="px-5 py-2.5 text-base cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Sign in with GitHub
      </button>
    </div>
  );
};

export default SignInPage;