import React from 'react';
import { FaHome, FaUserFriends, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 text-white sticky top-0 z-10 shadow-md">
      <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-400 transition">
        <FaUniversity size={24} />
        <Link to="/" className="text-xl font-bold">Kongu Engineering College</Link>
      </div>
      <ul className="flex space-x-6">
        <li className="flex items-center space-x-1 hover:text-teal-400 transition">
          <FaHome size={20} />
          <Link to="/" className="font-semibold">Home</Link>
        </li>
        <li className="flex items-center space-x-1 hover:text-teal-400 transition">
          <FaUserFriends size={20} />
          <Link to="/clubs" className="font-semibold">Clubs</Link>
        </li>
        <li className="flex items-center space-x-1 hover:text-teal-400 transition">
          <FaCalendarAlt size={20} />
          <Link to="/events" className="font-semibold">Events</Link>
        </li>
        <li className="flex items-center space-x-1 hover:text-teal-400 transition">
          <FaUserFriends size={20} />
          <Link to="/members" className="font-semibold">Members</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
