import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const WeatherWidget = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const loadScript = () => {
      const existingScript = document.getElementById('weatherwidget-io-js');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.id = 'weatherwidget-io-js';
      script.src = 'https://weatherwidget.io/js/widget.min.js';
      document.body.appendChild(script);
    };

    loadScript();

    // Cleanup function to remove the script when the component unmounts or language changes
    return () => {
      const script = document.getElementById('weatherwidget-io-js');
      if (script) {
        script.remove();
      }
    };
  }, [i18n.language]);

  return (
    <div className="min-w-56 max-h-20 relative w-56 scale-75 -translate-x-12 -translate-y-3 sm:-translate-y-1">
      <a 
        className="weatherwidget-io" 
        href={`https://forecast7.com/${i18n.language}/48d819d16/stuttgart-feuerbach/`} 
        data-font="Monaco"
        data-mode="Current"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        Stuttgart, Feuerbach, Germany
      </a>      
      <div className="absolute w-full h-full top-0 left-0"></div>
    </div>
  );
};

export default WeatherWidget;
