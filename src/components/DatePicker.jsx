import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DatePicker = ({ startDate, endDate, handleDateChange }) => {

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [slots, setSlots] = useState([]);

  const unavailableDates = slots
    .filter(timeslot => timeslot.id && timeslot.slots === '0')
    .map(timeslot => {
      return {
        date: new Date(timeslot.date),
        message: "already booked"
      }
    });  

  const getSlotsForDate = (date) => {
    const formattedDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const slot = slots.find(slot => slot.date === formattedDate);
    console.log("slot", formattedDate,  slot)
    return slot ? slot.slots : null;
  };    

  const filterDates = (date) => {
    return (
      date.setHours(0,0,0,0) >= new Date('2024-08-01').setHours(0,0,0,0)
      && date.setHours(0,0,0,0) <= new Date('2024-08-12').setHours(0,0,0,0)
    );
  }

  const renderDayContents = (day, date) => {
    const slotsLeft = getSlotsForDate(date);
      return (
        <div className="flex flex-col items-center">
          <span className="max-h-5">{day}</span>
          {slotsLeft && (
            <span className="text-xs text-neutral-400  font-normal">({slotsLeft})</span>
          )}
        </div>
      );
  };    

  useEffect(() => {
    async function fetchSlots() {
      const params = 'sheet=Timeslots';
      const appScriptsEndpointUrl = 'https://script.google.com/macros/s/AKfycbx8CoAqhjGb1RySj8HbGtxCPRz78WOCgMbxOSPAn3Gq-x5AmPMXD2ecKLj0hxC0p6NIVQ/exec';
      const response = await fetch(`${appScriptsEndpointUrl}?${params}`);
      const { data } = await response.json();
      setSlots(data);
      setIsLoading(false);
      console.log("data", data)
      console.log('unavailableDates', unavailableDates)
    }
    fetchSlots();
  }, []);  

  if (isLoading) {
    return <div className="">Loading...</div>;
  }
    
  return (
    <div>
      <div className="mb-2">
        <label className="">
          <span className="">{ t('registration.dates.label') }: </span>
          <span className="font-bold underline">
            {startDate 
              ? startDate.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' }) 
              + (!endDate || (endDate && endDate.getDate() !== startDate.getDate()) ? ' - ' : '') 
              + (endDate && endDate.getDate() !== startDate.getDate() 
                ? endDate.toLocaleDateString('de-DE', { year: 'numeric', month: '2-digit', day: '2-digit' })
                : '')
              : t('registration.dates.placeholder')
            }              
          </span>
        </label>
      </div>
      <div className="">
        <ReactDatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          onChange={handleDateChange}
          filterDate={filterDates}
          excludeDates={unavailableDates}
          placeholderText="Select an available date"
          dateFormat="yyyy-MM-dd"
          inline
          showDisabledMonthNavigation
          minDate={new Date('2024-08-01')}
          maxDate={new Date('2024-08-12')}
          renderDayContents={renderDayContents}
        />
        <small className="block text-neutral-500">
          { t('registration.dates.helpText') }
        </small>
      </div>
    </div>
  );
};

export default DatePicker;