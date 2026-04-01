import React from "react";
import Card from "./Card";
import miniLogo1 from "../assets/svgexport-8 (1).svg";
import miniLogo2 from "../assets/svgexport-9 (1).svg";
import miniLogo3 from "../assets/svgexport-10.svg";
import miniLogo4 from "../assets/svgexport-11.svg";

const Page2Footer = () => {
  const info = [
    {
      id: 1,
      imgLogo: miniLogo1,
      mainhead: "Advertising",
      info: "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      id: 2,
      imgLogo: miniLogo2,
      mainhead: "Content marketing",
      info: "We help you execute your plan and deliver results.",
    },
    {
      id: 3,
      imgLogo: miniLogo3,
      mainhead: "Content writing",
      info: "We help you create a marketing strategy that drives results.",
    },
    {
      id: 4,
      imgLogo: miniLogo4,
      mainhead: "Social media",
      info: "We help you build a strong social media presence and engage with your audience.",
    },
  ];

  return (
    <>
      <div className="py-10 flex flex-wrap justify-center gap-10 max-sm:flex-col max-sm:px-16 max-sm:gap-4 max-md:px-32 max-md:gap-8">
        {info.map((data, i) => {
          return <Card key={data.id} content={data} />;
        })}
      </div>
    </>
  );
};

export default Page2Footer;
