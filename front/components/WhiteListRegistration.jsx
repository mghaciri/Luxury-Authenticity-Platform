'use client';
import { useState } from 'react';
import { Card, Button } from "flowbite-react";

const WhiteListRegistration = () => {
  const [voterAddress, setVoterAddress] = useState('');
  const [registeredAddresses, setRegisteredAddresses] = useState([]);

  const handleRegister = () => {
    if (voterAddress) {
      setRegisteredAddresses([...registeredAddresses, voterAddress]);
      setVoterAddress(''); // Clear input after adding
    }
  };

  return (
    <section className="flex sm:flex-row flex-col-reverse justify-around items-center pb-20 w-full bg-green-600 pt-20 h-[95vh]">
      <div className="sm:w-1/2 xl:pl-60 lg:pl-32 px-8">
        <h2
          style={{ lineHeight: "1.2" }}
          className="text-black mt-6 xl:text-5xl lg:text-3xl text-2xl font-semibold mb-12 leading-loose"
        >
          WhiteListRegistration
        </h2>
        <div className='flex'>
        <input
          type="text"
          value={voterAddress}
          onChange={(e) => setVoterAddress(e.target.value)}
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Enter Voter Address"
        />
        <Button color="blue" onClick={handleRegister}>Add</Button>
        </div>
        <ul className="mt-4">
          {registeredAddresses.map((address, index) => (
            <li key={index} className="text-white mt-2">
              {address}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:w-1/2 xl:pr-60 lg:pr-32 px-8">
        {/* Other content */}
      </div>
    </section>
  );
};

export default WhiteListRegistration;