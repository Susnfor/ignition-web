"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" flex bg-slate-950">
      <div className="flex justify-center w-full h-screen flex-dir">
        <div className="flex items-center h-screen flex-col justify-center ">
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 125 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              width={100}
              height={100}
              priority={true}
              alt="flame logo image"
              className=" ease-in-out hover:animate-bounce"
            />
            <p className="text-white text-5xl font-skranji px-0">IGNITION</p>
          </motion.div>
          
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className=" text-white"> Choose us for your <span className="font-bold bg-slate-50 text-slate-950 italic px-1 animate-pulse">graphics need</span> </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
