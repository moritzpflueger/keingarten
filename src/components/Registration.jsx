import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Registration = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [hasAllergies, setHasAllergies] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const fetchUrl = 'https://script.google.com/macros/s/AKfycbx8CoAqhjGb1RySj8HbGtxCPRz78WOCgMbxOSPAn3Gq-x5AmPMXD2ecKLj0hxC0p6NIVQ/exec';

  const unavailableDates = data
    .filter(item => item.id && item.status !== 'available')
    .map(item => {
      return {
        date: new Date(item.date),
        message: "already booked"
      }
    });  

  useEffect(() => {
    console.log('selectedDate1',selectedDate)
  }, [selectedDate]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(fetchUrl);
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data)
      console.log('unavailableDates', unavailableDates)
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert('Please select a timeslot.');
      return;
    }

    // Convert the selected date to a local date string in the Berlin timezone
    const berlinTimezoneOffset = -120; // Berlin is UTC+2 during daylight saving time
    const localDate = new Date(selectedDate.getTime() - (berlinTimezoneOffset * 60 * 1000));
    const formattedDate = localDate.toISOString().split('T')[0]; // Extract the date part    

    const response = await fetch(fetchUrl, {
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
        timeslot: formattedDate,
      }),
    });

    if (response.ok) {
      alert('Booking successful');
    } else {
      alert('Error booking slot');
    }
  };

  if (isLoading) {
    return <div className="w-[60%] aspect-[2/3] flex justify-center items-center animate-pulse bg-neutral-100">Loading...</div>;
  }

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
        <div className="mb-2">
          <label>
            Date: {selectedDate ? selectedDate.toLocaleDateString('de-DE', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              weekday: 'long',
            }) : 'Please select date below'}
          </label>
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={date => {
              console.log('selectedDate2', date.toISOString());
              setSelectedDate(date);
            }}
            filterDate={(date) => {
              const month = date.getMonth();
              return month === 6 || month === 7; // Filter dates in July or August
            }}
            excludeDates={unavailableDates}
            placeholderText="Select an available date"
            dateFormat="yyyy-MM-dd"
            inline
          />
        </div>
        <button type="submit" className="px-5 py-3 text-white mt-2 bg-black">
          Book Slot
        </button>
      </form>
    </section>
  );
};

export default Registration;
