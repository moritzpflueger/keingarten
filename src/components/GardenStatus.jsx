import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const GardenStatus = () => {

  const [data, setData]= useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

useEffect(() => {
    async function fetchData() {
      const params = 'sheet=Configuration';
      const deploymentId = 'AKfycbzwko6rg5GRCTlQyFSomcQ_KpIeaoXX3Obx546pzl-Dcx-a5untal0-aTsCQuwczpRJ';
      const appScriptsEndpointUrl = `https://script.google.com/macros/s/${deploymentId}/exec`;      
      const response = await fetch(`${appScriptsEndpointUrl}?${params}`);
      const { data } = await response.json();
      setData(data);
      setIsLoading(false);
      console.log('header data', data)
    }
    fetchData();
  }, []);  

  if (isLoading) return (
    <div className="flex items-center justify-start gap-6 flex-1 pr-5">
      <div className={`ml-auto mr-12 sm:ml-0 sm:mr-0 w-10 h-10 rounded-full bg-neutral-200`} />
    </div>    
  );

  return (
    <div className="flex items-center justify-start gap-6 flex-1 pr-5 w-full ">
      <div className={`ml-auto sm:ml-0 w-10 h-10 rounded-full  ${data.status === 'open' ? 'bg-[lime]' : 'bg-[red]'}`} />
      <p className="text-sm font-semibold">{ t(`gardenStatus.${data.status}`)}</p>
    </div>
  );
}

export default GardenStatus;