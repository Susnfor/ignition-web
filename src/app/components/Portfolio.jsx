import React from "react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="py-10 bg-gradient-to-b from-slate-950 to-indigo-950 text-white text-center">
      <div className=" px-36">
        <p>
          ------------------------------------------------------------------
        </p>
        <p className="">
          Our specialized team is dedicated to crafting captivating and visually
          striking elements tailored specifically for the dynamic world of
          YouTube. We pride ourselves in creating exceptional thumbnails, logos,
          profile pictures, banners, and other graphics that elevate your
          channel `&apos;`s visibility and attract a wider audience.
        </p>
        <p>
          ------------------------------------------------------------------
        </p>
      </div>
      <div className="py-28 flex gap-10 mx-10 ">
        <p>
          <span className="font-bold">Thumbnails.</span> Our team understands
          the significance of thumbnails in grabbing viewers&apos; attention. We
          design thumbnails that are eye-catching, informative, and compelling,
          ensuring your video stands out amidst the clutter and entices viewers
          to click.
        </p>
        <p>
          <span className="font-bold">Logo.</span> A logo is the cornerstone of
          your brand identity. We create logos that resonate with your channel&apos;s
          message, personality, and style. Our designs are unique, memorable,
          and reflect the essence of your content, leaving a lasting impression
          on your audience.
        </p>
        <p>
          <span className="font-bold">Profile Picture.</span> Your profile
          picture is often the first thing viewers notice. We design profile
          pictures that encapsulate your channel&apos;s essence, making it instantly
          recognizable and inviting for viewers to explore what you offer.
        </p>
        <p>
          <span className="font-bold">Banners.</span> Banners are the canvases
          that represent your channel&apos;s brand and theme. Our team designs
          banners that seamlessly integrate with your channel&apos;s overall look,
          effectively communicating your identity and content focus.
        </p>
      </div>

      <h1 className="text-white flex justify-center font-bold text-2xl">
        EXAMPLES OF OUR WORK
      </h1>
      <div className="mx-10">
        <h1 className="py-5">Logos</h1>
        <div className="logos flex justify-evenly flex-wrap py-10 gap-y-1">
          <PortfolioItem
            item="logo"
            pic="/ignition-images/1.png"
            size="300"
            className="bg-white rounded-none hover:rounded-2xl shadow-lg hover:shadow-white hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="logo"
            pic="/ignition-images/13.png"
            size="300"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-yellow-400 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="logo"
            pic="/ignition-images/11.png"
            size="300"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-red-400 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="logo"
            pic="/ignition-images/4.jpg"
            size="300"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-orange-400 hover:scale-110 ease-in-out duration-100"
          />
        </div>
        <h1 className="py-10">Youtube Banners</h1>
        <div className="banners flex justify-evenly flex-wrap gap-x-2 gap-y-10">
          <PortfolioItem
            item="banner"
            pic="/ignition-images/6.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-blue-950 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="banner"
            pic="/ignition-images/7.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-orange-500 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="banner"
            pic="/ignition-images/8.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-red-400 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="banner"
            pic="/ignition-images/15.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-black hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="banner"
            pic="/ignition-images/9.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-green-700 hover:scale-110 ease-in-out duration-100"
          />
          <PortfolioItem
            item="banner"
            pic="/ignition-images/14.png"
            size="400"
            className="rounded-none hover:rounded-2xl shadow-lg hover:shadow-pink-900 hover:scale-110 ease-in-out duration-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
