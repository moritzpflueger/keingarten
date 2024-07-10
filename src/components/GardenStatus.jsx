import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const GardenStatus = ({ className }) => {

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

  const statusClass = () => {
    if (isLoading) return 'bg-neutral-200';
    if (data.status === 'open') return 'bg-[lime]';
    if (data.status === 'closed') return 'bg-[red]';
    return 'bg-neutral-200';
  }

  return (
    <div className={`flex items-center justify-start gap-2 sm:gap-6 ${className}`}>
      <div className={`w-10 h-10 rounded-full ${statusClass()}`} />
      <p className="text-sm font-semibold">{ data.status ? t(`gardenStatus.${data.status}`) : '' }</p>
    </div>
  );
}

export default GardenStatus;