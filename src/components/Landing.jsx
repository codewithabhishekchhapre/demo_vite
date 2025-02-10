import React from 'react';
import Navbar from './Navbar';
import Signup from './Signup';
import Faq from './Faq';
import pushpa from '../assets/pushpa.jpg'

function Landing() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-80px)] flex flex-col md:flex-row w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 h-full p-6 md:p-16 flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-lg md:text-xl text-center md:text-left">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <input
              type="text"
              placeholder="Enter email"
              className="border px-4 py-2 text-lg md:text-2xl font-semibold outline-green-300 w-full md:w-auto"
            />
            <button className="px-6 py-2 border text-lg md:text-2xl bg-green-500 text-white hover:bg-green-600 transition-all">
              Get Started
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className='w-full h-full overflow-hidden md:w-1/2'>
          {/* <Signup /> */}
      <img src={pushpa} alt="" className='h-full w-full object-cover p-14' />

        </div>
      </div>
      <Faq/>
    </>
  );
}

export default Landing;
