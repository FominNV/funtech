import { FC, JSX, useEffect, useMemo } from "react";
import gsap from "gsap";
import { Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps, SwiperSlideProps } from "swiper/react";
import { ArrowLeft, ArrowRight } from "@/shared/icons";
import styles from "./SwiperSlider.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";

export interface ISwiperSliderProps extends SwiperProps {
  children?: JSX.Element[];
  slideProps?: SwiperSlideProps;
}

export const SwiperSlider: FC<ISwiperSliderProps> = ({
  children = [],
  slideProps = {},
  ...rest
}) => {
  useEffect(() => {
    const swiperNode: HTMLElement | null = document.querySelector(
      `.${styles["swiper-slider"]}`,
    );

    if (!swiperNode) {
      return;
    }

    gsap.to(swiperNode, {
      opacity: 1,
      duration: 1.5,
      delay: 0.5,
    });
  }, []);

  const renderSlides: JSX.Element[] = useMemo(
    () =>
      children.map((elem, i) => (
        <SwiperSlide key={i} className={styles.slide} {...slideProps}>
          {elem}
        </SwiperSlide>
      )),
    [children, slideProps],
  );

  return (
    <div className={styles["swiper-slider"]}>
      <Swiper
        {...rest}
        className={styles.slider}
        virtual={{
          enabled: true,
          cache: true,
          addSlidesAfter: 3,
          addSlidesBefore: 2,
        }}
        navigation={{
          prevEl: `.${styles["prev-button"]}`,
          nextEl: `.${styles["next-button"]}`,
        }}
        modules={[Navigation, Virtual]}
      >
        {renderSlides}
      </Swiper>
      <div className={styles["navigate-buttons"]}>
        <button className={styles["prev-button"]}>
          <ArrowLeft />
        </button>
        <div className={styles.divider} />
        <button className={styles["next-button"]}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
