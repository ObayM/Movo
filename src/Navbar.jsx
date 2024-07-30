import React from 'react';
import { Home, Search, Mail, LogIn} from 'lucide-react';
import HomePage from './Home.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <header className="p-4 flex justify-between items-center ">
            <div className="text-2xl font-bold text-purple-400">
            <Link to="/">Movo</Link>
            </div>
            <nav>
            <ul className="flex space-x-6">
                {/* <li><a href="#" className="flex items-center hover:text-purple-400 transition-colors"><Home className="mr-1" size={18} /> Home</a></li> */}
                <li>
                <Link className="flex items-center hover:text-purple-400 transition-colors" to='/search'>
                <Search className="mr-1" size={18} /> Search
                </Link>
                </li>
                <li><a href="#" className="flex items-center hover:text-purple-400 transition-colors"><Mail className="mr-1" size={18} /> Contact</a></li>
                <li><a href="#" className="flex items-center hover:text-purple-400 transition-colors"><LogIn className="mr-1" size={18} /> Login</a></li>
            </ul>
            </nav>
        </header>


    )
}

export default Navbar;