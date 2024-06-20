import { useState, useEffect } from 'react';

const TimeComponent: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString("en-US", {
        timeZone: "Asia/Singapore",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="text-[#6272A4] text-[48px] font-bold">
      {currentTime}
    </p>
  );
};

export default TimeComponent;
