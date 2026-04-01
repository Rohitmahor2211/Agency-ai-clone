import React from "react";
import microsoftLogo from "../assets/microsoft_logo.png";
import zoomLogo from "../assets/zoom_logo.png";
import rakutenLogo from "../assets/rakuten_logo.png";
import coinbaseLogo from "../assets/coinbase_logo.png";
import airbnbtLogo from "../assets/airbnb-logo.svg";
import googleLogo from "../assets/google-logo.svg";

const SponcerdCompanies = () => {
  const logos = [
    microsoftLogo,
    zoomLogo,
    rakutenLogo,
    coinbaseLogo,
    airbnbtLogo,
    googleLogo,
  ];
  return (
    <>
      <div className="flex flex-col items-center py-12 gap-12 max-sm:px-10 ">
        <p className="text-base font-medium max-md:text-lg">Trusted by Leading Companies</p>
        <div className="flex gap-10 max-md:flex-wrap max-md:justify-center max-md:px-10">
          {logos.map((logo,i) => {
            return <img key={i} src={logo} alt="" className="h-6 max-sm:h-5" />;
          })}
        </div>
      </div>
    </>
  );
};

export default SponcerdCompanies;
