import React, { useState, useEffect, FC, useRef } from "react";
import styles from "./CountdownTimer.module.scss";

interface ICountdownTimerProps {
  hours?: number;
  minutes?: number;
  secondes?: number;
}

export const CountdownTimer: FC<ICountdownTimerProps> = ({
  hours = 0,
  minutes = 0,
  secondes = 0,
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const date = useRef<Date>(null);

  if (date.current === null) {
    const originalDate = new Date();
    date.current = new Date(
      originalDate.getTime() +
        hours * 60 * 60 * 1000 +
        minutes * 60 * 1000 +
        secondes * 1000,
    );
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      if (!date.current) {
        return;
      }
      const difference = date.current.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [hours]);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className={styles["countdown-timer"]}>
      {`${formatNumber(timeLeft.hours)}h ${formatNumber(timeLeft.minutes)}m ${formatNumber(timeLeft.seconds)}s`}
    </div>
  );
};
