import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "I CREATE STUNNING MOBILE APPS, WEB APPS, AND CAPTIVATING CONTENT WITH POWERFUL BACKEND FUNCTIONALITY"
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "I am an experienced full-stack developer with over 5 years of expertise in creating scalable and maintainable applications using a range of technologies, including LAMP, MERN, and Flutter. My proficiency in React, Node.js, Three.js, MongoDB, PHP, Laravel, and CodeIgniter has enabled me to deliver innovative solutions that guarantee a seamless user experience."
              }
            />
            <AnimatedBody
              text={
                "Throughout my career, I have worked on various projects, from small-scale applications to large enterprise-level systems, and have always maintained a focus on delivering high-quality code that adheres to best practices and industry standards."
              }
              className={"hidden"}
            />
            <AnimatedBody
              text={
                "I am continuously seeking to learn and implement new technologies to remain up-to-date with the latest trends in the industry. I believe in writing clean and efficient code, optimizing applications for speed and performance, and ensuring high standards of security and data protection."
              }
            />
            <AnimatedBody
              text={
                "My ability to work well in a team and collaborate effectively with cross-functional teams has also been a key factor in my success as a developer. I enjoy working in an agile environment and am always looking for ways to improve processes and workflows to deliver better results."
              }
            />
            <AnimatedBody
              text={
                "In my spare time, I like to experiment with new technologies, contribute to open-source projects, and share my knowledge with others through blog posts and tutorials."
              }
            />
            <AnimatedBody
              text={
                "Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
              }
            />
          </div>
        </div>

        <div className="mb-24 flex w-full flex-col gap-4 text-18 font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-16 md:leading-normal lg:mt-0 lg:mb-16 lg:text-18">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={"text-24 text-[#e4ded7] md:text-30 lg:text-20"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik, Vite"
                }
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Backend Tools & Database"}
                className={"text-24 text-[#e4ded7] md:text-30 lg:text-20"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Express.js, MongoDB, Mongoose, PHP, Laravel, CodeIgniter, AWS, Docker, Kubernetes, NGINX, Redis, RabbitMQ"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={"text-24 text-[#e4ded7] md:text-30 lg:text-20"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js, eChart, Mantine"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={"text-24 text-[#e4ded7] md:text-30 lg:text-20"}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, FigJam, Adobe XD, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div> */}
    </section>
  );
};

export default About;
