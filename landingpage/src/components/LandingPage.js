import React from "react";
import { Users } from "lucide-react";
import { motion } from "framer-motion";


function LandingPage() {
  const profiles = [
    { id: 1, position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { id: 2, position: "top-1/2 right-0 -translate-y-1/2 translate-x-1/2" },
    { id: 3, position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { id: 4, position: "top-1/2 left-0 -translate-y-1/2 -translate-x-1/2" },
  ];

  const orbitImages = {
    inner: ["avatar-1.jpg"],
    middle: ["avatar-2.jpg", "avatar-3.jpg"],
    outer: [
      "avatar-4.jpg",
      "avatar-5.jpg",
      "avatar-6.jpg",
      "avatar-7.jpg",
      "avatar-8.jpg",
      "avatar-9.jpg",
    ],
  };

  let globalImageIndex = 1; // Global counter for images // To count images uniquely across all orbits

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-100 via-purple-300 to-purple-900 p-4">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-amber-50/90 via-purple-400/80 to-purple-900/90 rounded-3xl p-6 shadow-xl overflow-hidden">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="bg-black text-white p-1 rounded">
                <Users size={20} />
              </div>
              <span className="ml-5 font-bold text-lg">OPTIC</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-black hover:text-purple-800">
                Your Team
              </a>
              <a href="#" className="text-black hover:text-purple-800">
                Solutions
              </a>
              <a href="#" className="text-black hover:text-purple-800">
                Blog
              </a>
              <a href="#" className="text-black hover:text-purple-800">
                Pricing
              </a>
            </div>
          </div>
        
        </nav>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="md:pr-8">
            <h1 className="text-5xl font-bold mb-1 leading-tight">
              <span className="text-white">O</span>bservation{" "}
              <span className="text-white"> P</span>latform{" "}
              <span className="text-white">f</span>or{" "}
              <span className="text-white"> T</span>racking{" "}
              <span className="text-white">I</span>nput{" "}
              <span className="text-white"> a</span>nd{" "}
              <span className="text-white">C</span>omputing &nbsp;&nbsp;
              {/* <span className="text-white"> Now Just One Click Away!</span> */}
            </h1>
            <button
            className="bg-black text-white px-6 py-3 rounded-full mt-8 inline-flex items-center hover:bg-purple-900"
            // Add the onClick handler here
            onClick={() => {
              window.location.href = 'http://localhost:5173';
            }}
          >
              Log In
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* //--------------- */}

          <div className="relative w-[420px] h-[420px] mx-auto my-12 flex items-center justify-center">
            {/* Central Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              <div className="text-center text-white">
                <div className="text-black text-2xl font">We value</div>
                <div className="text-black text-3xl font">YOU</div>
              </div>
            </div>

            {/* Orbits with predefined image mappings */}
            {[
              {
                radius: 80,
                profileSize: 40,
                images: ["avatar-1.png"], // One image for the inner orbit
                angles: [260], // Single position
              },
              {
                radius: 140,
                profileSize: 48,
                images: ["avatar-2.jpg", "avatar-3.jpg"], // Two images for the middle orbit
                angles: [210, 20], // Two positions
              },
              {
                radius: 200,
                profileSize: 56,
                images: [
                  "avatar-4.jpg",
                  "avatar-5.jpg",
                  "avatar-6.jpg",
                  "avatar-7.jpg",
                  "avatar-8.jpg",
                  "avatar-9.png",
                ], // Six images for the outer orbit
                angles: [300, 340, 40, 90, 135, 170], // Six positions
              },
            ].map((orbit, orbitIndex) => (
              <React.Fragment key={`orbit-${orbitIndex}`}>
                {/* Orbit border */}
                <div
                  className="absolute inset-0 rounded-full border border-black pointer-events-none"
                  style={{
                    width: `${orbit.radius * 2}px`,
                    height: `${orbit.radius * 2}px`,
                    left: `calc(50% - ${orbit.radius}px)`,
                    top: `calc(50% - ${orbit.radius}px)`,
                  }}
                ></div>

                {/* Profile Pictures */}
                {orbit.angles.map((angle, index) => (
                  <div
                    key={`orbit-${orbitIndex}-image-${index}`}
                    className="absolute rounded-full bg-gray-200 border-2 border-black shadow-md overflow-hidden animate-float"
                    style={{
                      width: `${orbit.profileSize}px`,
                      height: `${orbit.profileSize}px`,
                      left: `calc(50% + ${
                        Math.cos((angle * Math.PI) / 180) * orbit.radius
                      }px - ${orbit.profileSize / 2}px)`,
                      top: `calc(50% + ${
                        Math.sin((angle * Math.PI) / 180) * orbit.radius
                      }px - ${orbit.profileSize / 2}px)`,
                    }}
                  >
                    <img
                      src={`/profiles/${orbit.images[index]}`} // Map image to position
                      alt={`Profile ${orbit.images[index]}`}
                      className="object-cover rounded-full"
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ------MARQUE------- */}

        
        <div
  data-scroll
  data-scroll-section
  data-scroll-speed=".1"
  className="w-full py-4"
>
  <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap items-center">
    <motion.h1
      initial={{ x: "0" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
      className="text-[40px] leading-[1.2] font-[FoundersGroteskX-Condensed] pr-20 uppercase font-semibold text-pink-200 tracking-wide"
    >
      OPTIC AI • Sharper Visibility, Smarter Productivity
    </motion.h1>
    <motion.h1
      initial={{ x: "0" }}
      animate={{ x: "-100%" }}
      transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
      className="text-[40px] leading-[1.2] font-[FoundersGroteskX-Condensed] pr-20 uppercase font-semibold text-pink-200 tracking-wide"
    >
      OPTIC AI • Sharper Visibility, Smarter Productivity
    </motion.h1>
  </div>
</div>



        
      </div>
    </div>
  );
}

export default LandingPage;
