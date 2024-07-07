import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const GardenStatus = () => {

  const [data, setData]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

useEffect(() => {
    async function fetchData() {
      const params = 'sheet=Configuration';
      const appScriptsEndpointUrl = 'https://script.google.com/macros/s/AKfycbx8CoAqhjGb1RySj8HbGtxCPRz78WOCgMbxOSPAn3Gq-x5AmPMXD2ecKLj0hxC0p6NIVQ/exec';
      const response = await fetch(`${appScriptsEndpointUrl}?${params}`);
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
      console.log('header data', data)
    }
    fetchData();
  }, []);  

  if (isLoading) return;

  return (
    <div className="flex items-center justify-center gap-10 flex-1 pr-5">
      <div className={`ml-auto w-10 h-10 rounded-full  ${data.status === 'open' ? 'bg-[lime]' : 'bg-[red]'}`} />
      <p className="text-sm font-semibold">{ t(`gardenStatus.${data.status}`)}</p>
    </div>
  );
}

export default GardenStatus;