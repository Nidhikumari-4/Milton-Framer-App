import React from "react";
// @ts-ignore
import footerLogo from "../assets/FooterLogo.svg";
// @ts-ignore
import facebook from "../assets/facebook.svg";
// @ts-ignore
import twitter from "../assets/twitter.svg";
// @ts-ignore
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  const footerData = [
    {
      heading: "Products",
      text: ["Features", "Testimonials", "Pricing", "FAQs"],
    },
    {
      heading: "Resources",
      text: ["Change log", "Help center", "Blog", "Contact"],
    },
    {
      heading: "Others",
      text: ["Privacy", "Terms", "Affiliation", "Press"],
    },
    {
      heading: "From the blog",
      text: [
        "Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life",
        "Organizing Your Calendar for Enhanced Productivity and Focus",
        "The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks",
        "Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar",
      ],
    },
  ];
  return (
    <div className="bg-[#F1F2F4] flex md:flex-row items-center justify-between align-center ">
      <div className="flex md:max-w-[1200px]  mx-auto gap-10 py-10 flex-col md:flex-row">
        <div className="p-6 md:p-0">
          <a href="/" className="flex flex-row py-4">
            <img src={footerLogo} alt="logo" className="h-7 w-8 mr-2" />
            <p className="text-[28px] font-PlusJakartaSansBold text-gray-700 text-lg">
              Milton
            </p>
          </a>

          <div className="font-PlusJakartaSansMedium text-slate-500 my-5">
            <p>A short text explaining why my startup is so cool </p>
          </div>
          <div className="font-PlusJakartaSansMedium text-slate-500 my-5">
            <p>© My super start-up</p>
          </div>
          <div className="flex flex-row gap-4 cursor-pointer">
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-14 justify-center ">
          {footerData.map((data, i) => (
            <div className="flex flex-col" key={i}>
              <div className="font-PlusJakartaSansBold text-slate-700 text-[20px] my-2 px-5">
                {data.heading}
              </div>

              {data.text?.map((data, index) => (
                <div
                  className="leading-5 font-PlusJakartaSansMedium my-2 px-5 text-slate-500 text-[16px] cursor-pointer hover:underline"
                  key={index}
                >
                  {data}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
