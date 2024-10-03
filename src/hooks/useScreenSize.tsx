import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const useScreenSize = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('desktop');

  const updateDeviceType = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      setDeviceType('mobile');
    } else if (width <= 1024) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  };

  useEffect(() => {
    // Update device type on first load
    updateDeviceType();
    // Add event listener to update on window resize
    window.addEventListener('resize', updateDeviceType);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceType;
};

export default useScreenSize;