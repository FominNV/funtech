import { FC } from "react";
import Image from "next/image";
import { Button, CountdownTimer } from "@/shared";
import { Grade } from "@/shared/icons";
import styles from "./BidCard.module.scss";

interface IBidCardProps {
  title?: string;
  imageSrc?: string;
}

export const BidCard: FC<IBidCardProps> = ({ title, imageSrc }) => {
  const gradeValue: string = (Math.random() * 10).toFixed(2);
  const timerHours: number = Math.floor(Math.random() * 11);
  const timerMinutes: number = Math.floor(Math.random() * 61);
  const timerSecondes: number = Math.floor(Math.random() * 61);

  return (
    <div className={styles["card-bid"]}>
      <div className={styles["image-wrap"]}>
        {imageSrc && <Image src={imageSrc} alt="" fill />}
        <div className={styles.timer}>
          <CountdownTimer
            hours={timerHours}
            minutes={timerMinutes}
            secondes={timerSecondes}
          />
        </div>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.panel}>
        <div className={styles["panel-content"]}>
          <div className={styles.subtitle}>Current bid</div>
          <div className={styles.grade}>
            <Grade />
            <span>{gradeValue}</span>
          </div>
        </div>
        <Button>PLACE BID</Button>
      </div>
    </div>
  );
};
