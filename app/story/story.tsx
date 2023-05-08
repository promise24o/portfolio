import { gsap, Linear } from "gsap";
import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const StorySection = () => {
  
  const quoteRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const targetSection = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const [willChange, setwillChange] = useState(false);

  const initAboutAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });
    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      });

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
    return scrollTriggerInstance;
  };

  useEffect(() => {
    const aboutScrollTriggerInstance = initAboutAnimation(
      quoteRef,
      targetSection
    );

    // Return a cleanup function that kills the ScrollTrigger instance and clears the cached animations
    return () => {
      aboutScrollTriggerInstance.kill();
      gsap.killTweensOf(quoteRef.current);
    };
  }, [quoteRef, targetSection]);

  const renderQuotes = (): React.ReactNode => (
    <h1 ref={quoteRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
      <span
        className={`about-1 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I am a passionate Fullstack Developer who is passionate about blending development and design skills.{" "}
      </span>
      <span
        className={`about-2 leading-tight ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        I create modern and efficient web applications by utilizing both backend and frontend technologies.
      </span>
    </h1>
  );

  return (
    <section
      className={`tall:pt-20 tall:pb-16 pt-20 pl-10 pr-10 pb-24 w-full relative select-none section-container bg-[#0E1016] bg-cover bg-center`}
      ref={targetSection}
      id="sory"
    >
      {renderQuotes()}
    </section>
  );
};

export default StorySection;