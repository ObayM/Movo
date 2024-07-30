import React from 'react';
import {  Film, User, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
          <div style={{ minHeight: 'calc(100vh - 64px)' }} className="bg-gradient-to-br from-gray-900 to-indigo-900 text-white font-sans">
            <main className="container mx-auto px-4 py-16 text-center">
              <div className="mb-8 animate-float">
                <Film size={80} className="inline-block text-purple-400" />
              </div>

              <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Welcome to Movo
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                AI-Powered Movie & TV Show Recommendation Platform to Help You Discover New Content
              </p>
              <div className="tryitbtn flex justify-center space-x-4">
              <Link to='/search' class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform transform hover:scale-105">
                Try It For Free
              </Link>
              </div>
              <div className="flex justify-center p-4 ">
                <Link to='/login' className="m-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors">
                  <User className="mr-2" size={18} /> Login
                </Link>
                <Link to='/signup' className="m-4 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition-colors">
                  <UserPlus className="mr-2" size={18} /> Sign Up
                </Link>
              </div>
            </main>
            
            <footer className="absolute bottom-0 w-full text-center p-4">
              <p>&copy; 2024 Movo. All rights reserved.</p>
            </footer>
          </div>
        );

}  

export default HomePage