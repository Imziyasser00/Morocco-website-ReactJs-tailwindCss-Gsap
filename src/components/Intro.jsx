import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import Map from "../assets/map.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import voiceAudio from "../assets/voiceover.mp3";
import { CSSPlugin } from "gsap/CSSPlugin"; // Import CSSPlugin
import bg from "../assets/bg.png";
import Zellije from "../assets/zellije.svg";
import { useNavigate } from 'react-router-dom';
import Zellije1 from "../assets/zellije-tl.svg";
import Zellije2 from "../assets/zellije-bl.svg";
import Zellije3 from "../assets/zellije-br.svg";
import { ScrollTrigger } from "gsap/all";

const Intro = () => {
  gsap.registerPlugin(CSSPlugin, ScrollTrigger);
  const navigateTo = useNavigate();
  const tl = gsap.timeline();
  const paragraphRef = useRef(null);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const audioRef = useRef(new Audio(voiceAudio));
  const [content, setContent] = useState(false);

  useEffect(() => {
    audioRef.current.load();
  }, []);

  useGSAP(() => {
    tl.to("#logo", {
      scale: 1,
      ease: "power2.inOut",
      duration: 1.5,
    });
    tl.fromTo(
      "#button",
      {
        skewY: 5,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        ease: "power2.inOut",
        duration: 1,
      }
    );
  }, []);

  const handleClick = () => {
    tl.to("#logo", {
      y: -150,
      ease: "power3.inOut",
      duration: 1,
    }).to("#button", {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      pointerEvents: "none",
    });
    const timeoutId = setTimeout(paragraphAnimation, 1000);
    return () => clearTimeout(timeoutId);
  };

  const nextPage = () => {
    tl.to("#zellije", {
      opacity: 0,
    });
    tl.to("#bg", {
      backgroundColor: "#E5E4E2",
      duration: 0.2,
      opacity: 1,
    });

    tl.to("#heroPara", {
      y: 500,
      skewY: 8,
      opacity: 0,
      stagger: 0.2,
    }).to("#map", {
      y: 500,
      x: 200,
      skewY: 8,
      opacity: 0,
      onComplete: () => setContent(false),

    });

    tl.to("#zellije_bg", {
      opacity: 0,
    });

    tl.to("#logo", {
      y: 80,
      scale: 1,
      ease: "elastic.inOut",
      duration: 2,
    });

    tl.to("#logo", {
      scale: 200,
      duration: 2,
      ease: "power1.inOut",
    });

    tl.to("#logo", {
      css: { display: "none",
        onComplete : ()=> navigateTo('/cities')
       },
    });
    

  };


  const paragraphAnimation = () => {
    tl.fromTo(
      "#para",
      {
        opacity: 0,
        y: 200,
        skewY: 15,
      },
      {
        opacity: 1,
        skewY: 0,
        duration: 2,
        y: 0,
        ease: "power3.inOut",
      }
    );
    setParagraphVisible(true);
    playAudio();
    const timeout = setTimeout(animateParagraph, 800);
    return () => clearTimeout(timeout);
  };

  const playAudio = () => {
    audioRef.current.play();
    const paragraph = paragraphRef.current;

    audioRef.current.onended = () => {
      console.log("Audio playback finished");
      tl.to(paragraph, {
        opacity: 0,
      });
      tl.to("#logo", {
        y: -320,
        scale: 0.8,
      }).to("#bg1", {
        opacity: 1,
        duration: 3,
        delay: 1,
        ease: "power3.inOut",
      });
      setContent(true);
      tl.fromTo(
        "#map",
        {
          x: 1000,
          y: 80,
        },
        {
          x: 200,
          duration: 2,
          ease: "power3.inOut",
          y: 200,
        }
      ).to("#vignette", {
        opacity: 0,
        duration: 0.3,
      });
      tl.to("#zellije", {
        opacity: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
      tl.fromTo(
        "#heroPara",
        {
          y: 500,
          opacity: 0,
          skewY: 12,
        },
        {
          skewY: 0,
          opacity: 1,
          duration: 2,
          y: 0,
          ease: "power2.inOut",
          stagger: 0.2,
        }
      ).fromTo(
        "#map",
        {
          x: 1000,
          opacity: 0,
          skewY: 20,
        },
        {
          x: 0,
          skewY: 0,
          y: -74,
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
        }
      );
    };
  };

  const animateParagraph = () => {
    const paragraph = paragraphRef.current;
    const words = paragraph.innerText.split(" ");

    paragraph.innerText = "";
    const animationDuration = 16;
    const totalWords = words.length;
    const baseWordDuration = animationDuration / totalWords;
    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = `${word} `;
      span.style.color = "gray";

      paragraph.appendChild(span);
      const wordDelay = baseWordDuration;
      tl.to(span, {
        color: "white",
        duration: baseWordDuration,
        duration: wordDelay,
      });
    });
  };





  return (
    <div className="w-full h-full bg-black overflow-hidden"
    id="window">
      <div
        id="bg"
        className="h-[100vh] overflow-sroll w-[100vw] relative bg-[#181818] flex flex-col justify-center items-center"
      >
        <div
          id="vignette"
          className="fixed top-0 left-0 w-[100vw] h-full shadow-[0px_0px_300px_rgba(0,0,0,0.8)_inset]"
        ></div>
        <div className="relative z-10 w-1/2 flex justify-center items-center">
          <img
            id="logo"
            src={Logo}
            alt="logo"
            className="w-[100px] sm:w-[180px] scale-0"
          />
        </div>
        <button
          id="button"
          onClick={handleClick}
          className="relative opacity-0 z-10 tracking-wider hover:tracking-widest cursor-pointer text-white px-4 py-2 hover:px-5 transition-all bg-Mred rounded mt-16 font-medium text-xl"
        >
          Start your Journey
        </button>
        <div
          className={`text-lg sm:text-2xl absolute bottom-40 sm:bottom-72 text-gray-600 w-3/4 sm:w-1/2 text-center leading-10 tracking-widest ${
            paragraphVisible ? "" : "hidden"
          }`}
          id="para"
          ref={paragraphRef}
        >
          Welcome to Morocco, a captivating blend of ancient traditions and
          breathtaking landscapes. Explore vibrant souks, majestic mountains,
          and the vast Sahara Desert. Indulge in flavorful tagine and mint tea
          amidst rich cultural heritage. Begin your Moroccan adventure today.
        </div>
        <div className="w-full h-full absolute top-0 left-0 opacity-0" id="bg1">
          <di className="min-w-screen min-h-screen flex  relative">
            <img
              src={bg}
              id="zellije_bg"
              alt="bg"
              className="w-full h-full object-cover absolute left-0 top-0"
            />
            <img
              id="zellije"
              src={Zellije}
              alt="zellje"
              className="w-1/2 md:w-2/6 opacity-0 object-cover absolute -top-10 -right-10 md:-top-36 md:-right-24 "
            />
            <img
              id="zellije"
              src={Zellije1}
              alt="zellje"
              className="w-1/2 md:w-2/6 opacity-0 object-cover absolute -top-10 -left-10 md:-top-36 md:-left-24 "
            />
            <img
              id="zellije"
              src={Zellije2}
              alt="zellje"
              className="w-1/2 md:w-2/6 opacity-0 object-cover absolute -bottom-10 -left-10 md:-bottom-36 md:-left-24 "
            />
            <img
              id="zellije"
              src={Zellije3}
              alt="zellje"
              className="w-1/2 md:w-2/6 opacity-0 object-cover absolute -bottom-10 -right-10 md:-bottom-36 md:-right-24 "
            />
          </di>
        </div>

        <div
          className={`w-full absolute h-full top-0 left-0  ${
            content ? "" : "hidden"
          } `}
        >
          <div className="w-full h-full relative flex flex-col sm:flex-row relative">
            <div className="w-full h-full absolute top-0 left-0 h-full w-full">
              <div className="py-20 w-full h-full">
                <div className="container mx-auto h-full w-full flex flex-col md:flex-row items-center justify-between px-6">
                  <div className="md:w-1/2  mb-6 md:mb-0 flex  flex-col mt-10">
                    <div className="h-full my-auto flex justify-center sm:block items-center flex-col mt-24">
                      <h1
                        className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
                        id="heroPara"
                      >
                        Welcome to Morocco
                      </h1>
                      <p
                        className="text-lg text-gray-600 mb-6 text-center md:text-start"
                        id="heroPara"
                      >
                        Explore the rich culture, vibrant landscapes, and exotic
                        cuisine of Morocco.
                      </p>
                      <button
                        className="bg-Mred hover:bg-red-800 transition-all ease-in-out duration-600 tracking-widest text-white font-medium py-3 px-6 rounded-lg text-lg shadow-lg"
                        id="heroPara"
                        onClick={nextPage}
                      >
                        Start Your Journey
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2 relative h-full flex justify-center items-center">
                    <img
                      src={Map}
                      id="map"
                      alt="Moroccan Landscape"
                      className="w-[80%] sm:w-[80%] mt-32 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Intro;
