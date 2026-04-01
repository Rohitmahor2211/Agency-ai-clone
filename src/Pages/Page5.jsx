import React from "react";
import Common_Header from "../components/Common_Header";
import Form from "../components/Form";
const Page5 = () => {
  const Header_info = {
    mainHeading: "Reach out to us",
    description:
      "From strategy to execution, we craft digital solutions that move your business forward.",
  };
  return (
    <>
      <div id="contact" className="pb-20 pt-20 max-sm:pt-6">
        <Common_Header data={Header_info} />
          <Form />
      </div>
    </>
  );
};

export default Page5;
