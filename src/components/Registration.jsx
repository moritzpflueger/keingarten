import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from './DatePicker';

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasAllergies, setHasAllergies] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!startDate && !endDate) {
      alert('Please select a timeslot.');
      return;
    }

    // Convert the selected date to a local date string in the Berlin timezone
    const berlinTimezoneOffset = -120; // Berlin is UTC+2 during daylight saving time
    const localStartDate = new Date(startDate.getTime() - (berlinTimezoneOffset * 60 * 1000));
    const localEndDate = new Date(endDate.getTime() - (berlinTimezoneOffset * 60 * 1000));
    const formattedStartDate = localStartDate.toISOString().split('T')[0]; // Extract the date part    
    const formattedEndDate = localEndDate.toISOString().split('T')[0]; // Extract the date part    

    
    try {
      const appScriptsEndpointUrl = 'https://script.google.com/macros/s/AKfycbx8CoAqhjGb1RySj8HbGtxCPRz78WOCgMbxOSPAn3Gq-x5AmPMXD2ecKLj0hxC0p6NIVQ/exec';
      const response = await fetch(appScriptsEndpointUrl, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          hasAllergies,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        }),
      });

      if (response.ok) {
        alert('Booking successful');
      } else {
        alert('Error booking slot');
      }
    } catch (error) {
      alert('Error booking slot');
    }
  };

  return (
    <section className="">
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="mb-2">
          <label>
            Name:
            <input
              className="border-b border-black"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            Email:
            <input
              className="border-b border-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            Phone:
            <input
              className="border-b border-black"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            Allergies:
            <label className="custom-checkbox ml-3">
              <input
                type="radio"
                value="true"
                checked={hasAllergies === true}
                onChange={(e) => setHasAllergies(true)}
                required
              />   
                <span className="checkbox-label">Yes</span>           
            </label>
            <label className="custom-checkbox ml-3">
              <input
                type="radio"
                value="false"
                checked={hasAllergies === false}
                onChange={(e) => setHasAllergies(false)}
                required
              />
              <span className="checkbox-label">No</span>           
            </label>
          </label>
        </div>
        <DatePicker 
          startDate={startDate}
          endDate={endDate}
          handleDateChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          }}
        />
        <button type="submit" className="px-5 py-3 text-white mt-2 bg-black">
          Book Slot
        </button>
      </form>
    </section>
  );
};

export default Registration;
