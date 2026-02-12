"use client";
import { FC, JSX, useMemo } from "react";
import { BidCard } from "@/entities/cards";
import { type ISwiperSliderProps, SwiperSlider } from "@/shared";
import { BREAKPOINTS } from "@/shared/constants";
import { useGetCardListQuery } from "@/shared/store";
import styles from "./HomeView.module.scss";

const SLIDER_BREAKPOINTS: ISwiperSliderProps = {
  slidesPerView: "auto",
  spaceBetween: 32,
  breakpoints: {
    [BREAKPOINTS.XL]: {
      spaceBetween: 40,
    },
  },
};

export const HomeView: FC = () => {
  const { data: cardsData = [] } = useGetCardListQuery();

  const renderCards: JSX.Element[] = useMemo(
    () =>
      cardsData.map(({ id, name }, i) => {
        const imageIndex: number = (i % 4) + 1;

        return (
          <BidCard
            key={id}
            imageSrc={`/cards/bit-card-${imageIndex}.jpg`}
            title={name}
          />
        );
      }),
    [cardsData],
  );

  return (
    <div className={styles["home-view"]}>
      <div>
        <h1 className={styles.title}>Weekly - Top NFT</h1>
        <div className={styles["slider-wrap"]}>
          {!!cardsData.length && (
            <SwiperSlider {...SLIDER_BREAKPOINTS} loop>
              {renderCards}
            </SwiperSlider>
          )}
        </div>
      </div>
    </div>
  );
};
