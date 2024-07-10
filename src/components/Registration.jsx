import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from './DatePicker';
import { useTranslation} from 'react-i18next';

const Registration = () => {

  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [isStayingOvernight, setIsStayingOvernight] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setNumberOfGuests(1);
    setIsStayingOvernight(false);
    setStartDate(null);
    setEndDate(null);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

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
      const deploymentId = 'AKfycbzwko6rg5GRCTlQyFSomcQ_KpIeaoXX3Obx546pzl-Dcx-a5untal0-aTsCQuwczpRJ';
      const appScriptsEndpointUrl = `https://script.google.com/macros/s/${deploymentId}/exec`;
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
          isStayingOvernight,
          numberOfGuests,
          startDate: formattedStartDate,
          endDate: formattedEndDate,
        }),
      });

      const result = await response.json();
      setIsSubmitting(false);

      if (result.result === 'success') {
        alert('Booking successful');
        resetForm();
      } else {
        alert(`Error booking slot: ${result.message}`);
      }
    } catch (error) {
      alert('Error booking slot');
    }
  };

  const isDisabled = !name || !email || !phone || !startDate || !endDate || isSubmitting;

  return (
    <section id="registration">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>
            {t('registration.name.label')}:
            <input
              className="border-b border-black px-3"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            {t('registration.email.label')}:
            <input
              className="border-b border-black px-3"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            {t('registration.phone.label')}:
            <input
              className="border-b border-black px-3"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            {t('registration.numberOfGuests.label')}:
            <input
              className="border-b border-black px-3"
              type="number"
              min="1"
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="mb-2">
          <label>
            {t('registration.stayingOvernight.label')}:
            <label className="custom-checkbox ml-3">
              <input
                type="radio"
                value="true"
                checked={isStayingOvernight === true}
                onChange={(e) => setIsStayingOvernight(true)}
                required
              />   
                <span className="checkbox-label">
                  {t('registration.stayingOvernight.yes')}
                </span>           
            </label>
            <label className="custom-checkbox ml-3">
              <input
                type="radio"
                value="false"
                checked={isStayingOvernight === false}
                onChange={(e) => setIsStayingOvernight(false)}
                required
              />
              <span className="checkbox-label">
                {t('registration.stayingOvernight.no')}
              </span>           
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
        <button 
          id="submit-button"
          disabled={isDisabled}
          type="submit" 
          className="px-5 py-3 text-white mt-5 bg-black w-2/3 h-12 disabled:bg-neutral-700"
        >
          {isSubmitting 
          ? <span className="loading-dots mx-auto scale-150"></span>
          : t('registration.submitButton')
          }
        </button>
      </form>
    </section>
  );
};

export default Registration;
