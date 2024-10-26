import React from 'react';
import { FaLightbulb, FaBrain, FaAward } from 'react-icons/fa';

function Event() {
  const events = [
    {
      name: 'Renaissance',
      icon: <FaLightbulb size={32} />,
      time: '10:00 AM - 12:00 PM',
      venue: 'G12',
      coordinator: { name: 'M.Senthan Vigas', phone: '91 9688729596' },
    },
    {
      name: 'Credita',
      icon: <FaBrain size={32} />,
      time: '1:00 PM - 3:00 PM',
      venue: 'G11',
      coordinator: { name: 'V.Kamal Kishore', phone: '7530086388' },
    },
    {
      name: 'Cognisance',
      icon: <FaAward size={32} />,
      time: '3:30 PM - 5:30 PM',
      venue: 'G13',
      coordinator: { name: 'R.Arvind', phone: '8122577433' },
    },
  ];

  return (
    <section id="events" className="p-8 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Upcoming Events</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.name}
            className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4 text-teal-500">{event.icon}</div>
            <h4 className="text-2xl font-semibold mb-2">{event.name}</h4>
            <p className="text-gray-600 font-medium">{event.time}</p>
            <p className="text-gray-500">Venue: {event.venue}</p>
            <div className="mt-4 text-gray-700">
              <h5 className="font-semibold">Coordinator</h5>
              <p>{event.coordinator.name}</p>
              <p>{event.coordinator.phone}</p>
            </div>
            <button className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Event;
