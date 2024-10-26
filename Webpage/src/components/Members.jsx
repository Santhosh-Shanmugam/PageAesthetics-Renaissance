import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

function Members() {
  const members = [
    {
      name: 'Senthan Vigas',
      post: 'President',
      club: 'CCC',
      image: '', // Empty or invalid path to simulate missing image
      icon: <FaUserCircle size={96} className="text-teal-500 mx-auto" />,
    },
    {
      name: 'Kamal Kishore',
      post: 'President',
      club: 'CSEA',
      image: '', // Empty or invalid path to simulate missing image
      icon: <FaUserCircle size={96} className="text-teal-500 mx-auto" />,
    },
    {
      name: 'Arvind',
      post: 'President',
      club: 'CCC',
      image: '', // Empty or invalid path to simulate missing image
      icon: <FaUserCircle size={96} className="text-teal-500 mx-auto" />,
    },
  ];

  return (
    <section id="members" className="p-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Meet Our Members</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.name}
            className="relative group bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-center"
          >
            {/* Front of the Card */}
            <div className="p-6">
              {member.image ? (
                <img
                  src={member.image}
                  alt={`${member.name}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              ) : (
                <div className="w-full h-48 flex justify-center items-center text-teal-500">
                  <FaUserCircle size={96} />
                </div>
              )}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-teal-500 font-medium">{member.post}</p>
              <div className="text-gray-700">{member.club}</div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-teal-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
              <div className="text-2xl">{member.icon}</div>
              <h4 className="text-xl font-semibold mt-2">{member.name}</h4>
              <p className="text-gray-200">{member.post}</p>
              <p className="text-gray-200">{member.club}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Members;
