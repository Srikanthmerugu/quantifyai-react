import { useState } from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Images
import adamProfile from '../assets/profile/Adam.jpg';
import mikeProfile from '../assets/profile/Mike.jpg';
import rajeshProfile from '../assets/profile/Rajesh.png';
import danielProfile from '../assets/profile/Daniel.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      initials: 'AS',
      name: 'Adam Stephenson',
      role: 'Founder / CEO',
      description:
        "Visionary leader driving QuantifyAI's mission to redefine data quality standards globally.",
      profileImage: adamProfile,
      linkedin: 'https://linkedin.com/in/adam-stephenson',
      email: 'adam@quantifyai.com',
    },
    {
      id: 2,
      initials: 'MK',
      name: 'Mike Kates',
      role: 'Chief Research Officer',
      description:
        'Research methodology expert with 15+ years in quantitative analytics and panel management.',
      profileImage: mikeProfile,
      linkedin: 'https://linkedin.com/in/mike-kates',
      email: 'mike@quantifyai.com',
    },
    {
      id: 3,
      initials: 'RD',
      name: 'Rajesh Dechineny',
      role: 'Chief Operating Officer',
      description:
        'Operational excellence specialist ensuring seamless global research delivery.',
      profileImage: rajeshProfile,
      linkedin: 'https://linkedin.com/in/rajesh-dechineny',
      email: 'rajesh@quantifyai.com',
    },
    {
      id: 4,
      initials: 'DS',
      name: 'Daniel Stephenson',
      role: 'VP, Strategic Partnerships',
      description:
        'Building global alliances and expanding market reach across 48 countries.',
      profileImage: danielProfile,
      linkedin: 'https://linkedin.com/in/daniel-stephenson',
      email: 'daniel@quantifyai.com',
    },
  ];

  const TeamMemberCard = ({ member }) => (
    <div
      tabIndex={0}
      className="relative w-72 h-80 sm:w-80 sm:h-80 rounded-[32px] p-[3px]
                 group focus:outline-none
                 bg-gradient-to-br from-blue-500/10 to-teal-400/10
                 shadow-[0_70px_30px_-50px_rgba(0,102,255,0.19)]
                 transition-all duration-500 ease-in-out
                 hover:shadow-[0_70px_30px_-50px_rgba(0,102,255,0.3)]"
    >
      {/* Mail */}
      <Link
        to="/contact"
        className="absolute right-8 top-6 z-10"
      >
        <FaEnvelope className="w-6 h-6 text-blue-400 group-hover:text-teal-400 transition-colors" />
      </Link>

      {/* Avatar */}
      <div
        className="absolute inset-[3px] rounded-[29px] overflow-hidden z-[1]
                   transition-all duration-500 ease-in-out
                   group-hover:w-24 group-hover:h-24
                   group-active:w-24 group-active:h-24
                   group-focus-within:w-24 group-focus-within:h-24
                   group-hover:top-2.5 group-hover:left-2.5
                   group-active:top-2.5 group-active:left-2.5
                   group-focus-within:top-2.5 group-focus-within:left-2.5
                   group-hover:rounded-full
                   group-active:rounded-full
                   group-focus-within:rounded-full
                   group-hover:border-4 group-hover:border-gradient-to-r
                   group-hover:from-blue-500 group-hover:to-teal-400"
      >
        <img
          src={member.profileImage}
          alt={member.name}
          className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110 "
        />
      </div>

      {/* Animated Bottom Panel */}
      <div
        className="absolute left-[3px] right-[3px] bottom-[3px] top-[100%]
                   bg-gradient-to-r from-blue-500 to-teal-400 rounded-[29px]
                   shadow-[0_5px_5px_inset_rgba(0,0,0,0.1)]
                   overflow-hidden
                   transition-all duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)]
                   group-hover:top-[20%]
                   group-active:top-[20%]
                   group-focus-within:top-[20%]
                   group-hover:rounded-[80px_29px_29px_29px]"
      >
        <div className="absolute inset-x-6 bottom-0 h-40 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
          <p className="text-blue-100 font-semibold mb-2">{member.role}</p>
          <p className="text-white text-sm opacity-90 mb-4">
            {member.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 hover:scale-125 transition"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>

            <span
              className="bg-gradient-to-r from-teal-100 to-blue-100
                         text-blue-600 text-xs font-bold px-4 py-2 rounded-full"
            >
              {member.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-blue-400 bg-blue-400/10 px-4 py-2 rounded-full">
            LEADERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Leadership{' '}
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-gray-300 mt-4">
            Meet the experts driving innovation in quantitative research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex justify-center">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
