import React, { useState } from "react";

const DeviceInfoButton = () => {
  const [deviceInfo, setDeviceInfo] = useState(null);

  const handleClick = () => {
    const info = {
      brand: navigator.vendor,
      operatingSystem: navigator.platform,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      screenAvailWidth: window.screen.availWidth,
      screenAvailHeight: window.screen.availHeight,
      logicalProcessorCores: navigator.hardwareConcurrency,
      deviceMemory: navigator.deviceMemory || "Not available",
    };
    setDeviceInfo(info);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Device Information</button>
      {deviceInfo && <pre>{JSON.stringify(deviceInfo, null, 2)}</pre>}
    </div>
  );
};

export default DeviceInfoButton;
