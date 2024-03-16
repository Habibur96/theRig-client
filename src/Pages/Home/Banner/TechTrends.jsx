// import { useState } from "react";

// const accordionData = [
//   {
//     title: "heading",
//     subtitle: "Hi!~ How are you doing?",
//     colorBg: "bg-amber-500",
//     colorBorder: "border-amber-500",
//   },
//   {
//     title: "heading",
//     subtitle: "Hi!~ How are you doing? This is my new",
//     colorBg: "bg-orange-500",
//     colorBorder: "border-orange-500",
//   },
//   {
//     title: "heading",
//     subtitle: "Hi!~ How are you doing?",
//     colorBg: "bg-red-500",
//     colorBorder: "border-red-500",
//   },
//   {
//     title: "heading",
//     subtitle: "Hi!~ How are you doing?",
//     colorBg: "bg-sky-500",
//     colorBorder: "border-sky-500",
//   },
//   {
//     title: "heading",
//     subtitle: "Hi!~ How are you doing?",
//     colorBg: "bg-purple-500",
//     colorBorder: "border-purple-500",
//   },
// ];
// const TechTrends = () => {
//   // Toggle State and Function
//   const [isActive, setIsActive] = useState(0);
//   const handleToggle = (idx) => {
//     setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
//   };
//   return (
//     <div className="w-fit mx-auto min-h-[300px] flex shadow-md overflow-hidden">
//       {accordionData.map((_, idx) => (
//         <div key={idx} className="flex">
//           {/* toggle item */}
//           <button
//             onClick={() => handleToggle(idx)}
//             className={`h-full w-fit flex items-end pb-10 bg-white border-b-8 ${_.colorBorder} shadow-[2px_2px_5px_#00000083]`}
//           >
//             <div
//               className={`w-16 h-16 text-white ${_.colorBg} relative flex items-center justify-center`}
//             >
//               <span
//                 className={`w-0 h-0 ${_.colorBorder} border-r-[60px] border-b-[60px] rounded-lg border-r-transparent absolute rotate-[225deg] left-8 -z-50`}
//               ></span>
//               0{idx + 1}
//             </div>
//           </button>
//           {/* container */}
//           <div
//             className={`grid place-content-center  ${
//               isActive === idx
//                 ? "w-56 px-5 opacity-1 scale-1"
//                 : "w-0 opacity-0 scale-0"
//             } text-black duration-300 ease-in-out`}
//           >
//             <h2 className="font-black lg:text-2xl text-white">{_.title}</h2>
//             <p className="text-gray-200">{_.subtitle}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TechTrends;

import React from "react";
import { Link } from "react-router-dom";

const TechTrends = () => {
  return (
    <>
      <div className="text-center font-semibold">
        <h1 className="text-3xl">Tech Trends!</h1>
        <h1 className="text-xl">Your Daily Tech News</h1>
      </div>

      <div className="card card-side bg-base-100 shadow-xl bg-[#050C2E] text-slate-900 ">
        <figure>
          <img
            className="h-40"
            src="https://static.tweaktown.com/news/9/6/96748_01_amd-radeon-rx-7700-xt-available-for-399-lowest-price-to-date-and-on-par-with-rtx-4060-ti.jpg?fbclid=IwAR2y4VMY-k1B5XZy6fym_YRBkDbbIKbTbjpcAwjxT8YgZ13DauctqM4DVBU"
            alt="Movie"
          />
        </figure>
        <div className="card-body h-10 ">
          <a
            href="https://www.digitaltrends.com/computing/amd-path-tracing-next-generation/?fbclid=IwAR1j4LUsVxU7v8bp3q3PQBF4D4KWLBGIhXiIHlZfZL9KGX37al4ljGIpg2U"
            target="_blank"
          >
            <h2 className="card-title text-lg">
              AMD needs to fix this <br /> one problem with its next-gen GPUs
            </h2>
          </a>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl bg-[#050C2E] text-slate-900">
        <figure>
          <img
            className="h-40 "
            src="https://cdn.neowin.com/news/images/uploaded/2024/01/1704700237_screenshot_1233_story.jpg?fbclid=IwAR1ARz4gJDFoDWConoHFfq7qU8oBO7HsOPBt3OGCZnylCTDYeVHlD8rEg9E"
            alt="Movie"
          />
        </figure>
        <div className="card-body h-10">
          <a
            href="https://www.neowin.net/news/intel-launches-rest-of-the-14th-gen-desktop-lineup-that-microsoft-had-leaked-earlier/?fbclid=IwAR24ytaRgtr10mPscAFwP7yIQBmAzCAXMyD2EiIx3UdbQYH802bsGxSEEZs"
            target="_blank"
          >
            <h2 className="card-title text-lg">
              Intel launches rest <br /> of the 14th Gen desktop lineup that
              .....
            </h2>
          </a>

          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Watch</button> */}
          </div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl bg-[#050C2E] text-slate-900">
        <figure>
          <img
            className="h-40 "
            src="https://static.tweaktown.com/news/9/6/96080_01_asrocks-new-bios-for-intel-600-700-series-motherboards-improves-cpu-performance-by-up-to-10.jpg?fbclid=IwAR2TC5JPq5P8XTkQtW-OR3Le4ZknHh9GKM6AKJqvtIX6f58YQ4wkUWdBD40"
            alt="Movie"
          />
        </figure>
        <div className="card-body h-10">
          <a
            href="https://www.tweaktown.com/news/motherboards/index.html?fbclid=IwAR1ARz4gJDFoDWConoHFfq7qU8oBO7HsOPBt3OGCZnylCTDYeVHlD8rEg9E"
            target="_blank"
          >
            <p className="card-title text-lg">
              ASRock has released <br /> a new BIOS for its range of <br />
              Intel 600 and 700 Series motherboards
            </p>
          </a>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-xl bg-[#050C2E] text-slate-900">
        <figure>
          <img
            className="h-40 "
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4080/geforce-ada-4080-og-1200x630.jpg?fbclid=IwAR1mcbB2gVEwH2Npuj9PoQztRw34f0GO0NKWkUwNfWaBVT07_gFTkQff1i8"
            alt="Movie"
          />
        </figure>
        <div className="card-body h-10">
          <a
            href="https://www.tweaktown.com/news/video_cards/index6.html?fbclid=IwAR3xv1VY0JjOx53JNunJ3wNmyddJaXwW3NNrpi7syQxhaFLpCFIImqi3lHE"
            target="_blank"
          >
            <h2 className="card-title text-lg">
              GIGABYTE is prepping to <br /> launch a new Radeon <br /> RX 7900
              GRE graphics card with the....
            </h2>
          </a>
        </div>
      </div>
    </>
  );
};

export default TechTrends;
