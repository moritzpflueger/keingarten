import React from 'react';
import ReactDatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const DatePicker = ({ startDate, endDate, handleDateChange }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  const unavailableDates = data
    .filter(item => item.id && item.status !== 'available')
    .map(item => {
      return {
        date: new Date(item.date),
        message: "already booked"
      }
    });  

  useEffect(() => {
    async function fetchData() {
      const params = 'sheet=Timeslots';
      const appScriptsEndpointUrl = 'https://script.google.com/macros/s/AKfycbx8CoAqhjGb1RySj8HbGtxCPRz78WOCgMbxOSPAn3Gq-x5AmPMXD2ecKLj0hxC0p6NIVQ/exec';
      const response = await fetch(`${appScriptsEndpointUrl}?${params}`);
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data)
      console.log('unavailableDates', unavailableDates)
    }
    fetchData();
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
      <div>
        <ReactDatePicker
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          onChange={handleDateChange}
          filterDate={(date) => {
            return (
              date.setHours(0,0,0,0) >= new Date('2024-08-01').setHours(0,0,0,0)
              && date.setHours(0,0,0,0) <= new Date('2024-08-12').setHours(0,0,0,0)
            );
          }}
          excludeDates={unavailableDates}
          placeholderText="Select an available date"
          dateFormat="yyyy-MM-dd"
          inline
          showDisabledMonthNavigation
          minDate={new Date('2024-08-01')}
          maxDate={new Date('2024-08-12')}
        />
      </div>
    </div>
  );
};

export default DatePicker;