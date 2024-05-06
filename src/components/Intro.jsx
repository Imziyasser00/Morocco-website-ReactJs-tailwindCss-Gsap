import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import voiceAudio from "../assets/voiceover.mp3";
import { CSSPlugin } from "gsap/CSSPlugin"; // Import CSSPlugin

const Intro = () => {
  gsap.registerPlugin(CSSPlugin);
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
    const timeoutId = setTimeout(paragraphAnimation, 2000);
    return () => clearTimeout(timeoutId);
  };

  const paragraphAnimation = () => {
    setParagraphVisible(true);
    playAudio();
    const timeout = setTimeout(animateParagraph, 1200);
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
      }).to("#bg", {
        backgroundColor: "#fff",
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
        duration: 1,
      }).fromTo("#heroPara",{
            y: 500,
            opacity: 0,
            skewY: 12,
      },{
        skewY: 0,
        opacity: 1,
        duration: 2,
        y: 0,
        ease: "power2.inOut",
        stagger: 0.2,
      })
    };
  };

  const animateParagraph = () => {
    const paragraph = paragraphRef.current;
    const words = paragraph.innerText.split(" ");

    paragraph.innerText = "";
    const animationDuration = 18;
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

  window.addEventListener("mousemove", (event) => {
    let xPos = event.clientX / window.innerWidth - 0.5;
    let yPos = event.clientY / window.innerHeight - 0.5;
    gsap.to("#map", {
      duration: 0.5,
      rotationX: yPos * 10,
      rotationy: xPos * 10,
    });
  });

  return (
    <div
      id="bg"
      className="min-w-screen min-h-screen relative bg-[#181818] flex flex-col justify-center items-center"
    >
      <div
        id="vignette"
        className="fixed top-0 left-0 w-full h-full shadow-[0px_0px_300px_rgba(0,0,0,0.8)_inset]"
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
        ref={paragraphRef}
      >
        Welcome to Morocco, a captivating blend of ancient traditions and
        breathtaking landscapes. Explore vibrant souks, majestic mountains, and
        the vast Sahara Desert. Indulge in flavorful tagine and mint tea amidst
        rich cultural heritage. Begin your Moroccan adventure today.
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
                <div className="md:w-1/2  mb-6 md:mb-0 flex flex-col mt-10">
                  <div className="h-full my-auto" >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" id="heroPara">
                      Welcome to Morocco
                    </h1>
                    <p className="text-lg text-gray-600 mb-6" id="heroPara">
                      Explore the rich culture, vibrant landscapes, and exotic
                      cuisine of Morocco.
                    </p>
                    <button className="bg-Mred hover:bg-red-800 transition-all ease-in-out duration-600 tracking-widest text-white font-medium py-3 px-6 rounded-lg text-lg shadow-lg" id="heroPara">
                      Start Your Journey
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img
                    src="https://placeimg.com/800/600/arch"
                    alt="Moroccan Landscape"
                    className="w-full rounded-lg shadow-lg"
                  />
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
