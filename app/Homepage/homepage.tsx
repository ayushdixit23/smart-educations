import React from "react";
import Homeimage from "@/public/homepage1.png";
import Homeeimage from "@/public/hackathon_2_new-removebg-preview.png";
import Chatbotimage from "@/public/chatbot.jpeg";
import Image from "next/image";

const homepage = () => {
  return (
    <div>
      <div className="border-white border-t">
        <Image src={Homeimage} alt="home" className="w-full h-90" />
        <button className="p-3 bg-red-500 absolute left-128 bottom-32 ">
          Create course
        </button>
      </div>
      <div className="border-white border-t-2">
        <Image src={Homeeimage} alt="home" className="w-full h-90 " />
      </div>
      <div className="border-white border-t-2">
        <Image src={Chatbotimage} alt="home" className="w-full h-90 " />
      </div>
    </div>
  );
};

export default homepage;
