import { useEffect } from 'react';

const WeatherWidget = () => {

  useEffect(() => {
  !function(d,s,id) {
    var js,fjs=d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
      js=d.createElement(s);
      js.id=id;
      js.src='https://weatherwidget.io/js/widget.min.js';
      fjs.parentNode.insertBefore(js,fjs);
    }
  }(document,'script','weatherwidget-io-js');
  }, []);

  return (
    <div className="max-h-20 relative w-56 scale-75 -translate-x-12 -translate-y-3 sm:translate-y-0">
      <a 
        className="weatherwidget-io" 
        href="https://forecast7.com/en/48d819d16/stuttgart-feuerbach/" 
        data-font="Monaco"
        data-mode="Current"
        style={{ display: 'block', width: '100%', height: '100%' }}
      >
        {/* Stuttgart, Feuerbach, Germany */}
      </a>      
      <div className="absolute w-full h-full top-0 left-0"></div>
    </div>
  );
}
export default WeatherWidget;