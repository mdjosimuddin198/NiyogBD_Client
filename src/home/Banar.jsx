import React from "react";
import { motion } from "motion/react";

const Banar = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <div className="flex-1 ">
          <motion.img
            animate={{ y: [0, 80, 0] }}
            transition={{ duration: 8, delay: 5, repeat: Infinity }}
            src="https://i.ibb.co/ds7RYwyD/close-up-happy-people-work.jpg"
            className="max-w-sm border-blue-400  shadow-2xl border-l-9 border-b-8 rounded-t-[40px] rounded-br-2xl"
          />
          <motion.img
            animate={{ x: [0, 80, 0] }}
            transition={{ duration: 5, delay: 2, repeat: Infinity }}
            src="https://i.ibb.co/0RY0hpSc/cherrydeck-r-MILC1-PIw-M0-unsplash.jpg"
            className="max-w-sm border-blue-400  shadow-2xl border-l-9 border-b-8 rounded-t-[40px] rounded-br-2xl"
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-5xl font-bold">
            Find the perfect freelance services for your business
          </h1>
          <p className="py-6">
            Each month, more than 3 lakh job seekers turn to website in their
            search for work, making over 140,00 applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banar;
