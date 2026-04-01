import React, { useLayoutEffect, useRef } from "react";
import profilepics from "../assets/group_profile-B4SEylet.png";
import gsap from "gsap";
const ProfileCardBtn = () => {
  const card = useRef();
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(()=>{
  //     gsap.from(card.current, {
  //       y: 40,
  //       duration:1,
  //       autoAlpha:0,
  //       ease: "power1.inOut",
  //     });
  //   })
  //   return ()=> ctx.revert() 
  // },[]);
  return (
    <>
      <div
        ref={card}
        className="w-68 py-1.5 mt-20 border border-gray-400 rounded-4xl  flex px-3 gap-4 items-center max-sm:my-8"
      >
        <img src={profilepics} alt="" className="h-7 " />
        <p className="text-sm">Trusted by 10k+ people</p>
      </div>
    </>
  );
};

export default ProfileCardBtn;
