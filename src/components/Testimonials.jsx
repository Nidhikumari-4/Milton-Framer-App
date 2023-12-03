import React from "react";
// @ts-ignore
import userIcon1 from "../assets/userIcon1.webp";
// @ts-ignore
import userIcon2 from "../assets/userIcon2.webp";
// @ts-ignore
import userIcon3 from "../assets/userIcon3.webp";
// @ts-ignore
import userIcon4 from "../assets/userIcon4.webp";
// @ts-ignore
import userIcon5 from "../assets/userIcon5.webp";
// @ts-ignore
import userIcon6 from "../assets/userIcon6.webp";
// @ts-ignore
import userIcon7 from "../assets/userIcon7.webp";
// @ts-ignore
import userIcon8 from "../assets/userIcon8.webp";
// @ts-ignore
import userIcon9 from "../assets/userIcon9.webp";

const Testimonials = () => {
  const testimonialsCards = [
    {
      index: "1",
      userIcon: userIcon1,
      cardHeading: "“Just love it”",
      cardText:
        "This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.",
      userName: "Adam Moore",
      userRole: "Entrepreneur",
    },
    {
      index: "2",
      userIcon: userIcon2,
      cardHeading: "“Highly recommend”",
      cardText:
        "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
      userName: "Sophie Devilan",
      userRole: "Entrepreneur",
    },
    {
      index: "3",
      userIcon: userIcon3,
      cardHeading: "“The best time manager app”",
      cardText:
        "I love how user-friendly this app is! It's so easy to add events and set reminders, and it's made my life so much more organized.",
      userName: "Brad de Costa",
      userRole: "Head of marketing",
    },
    {
      index: "4",
      userIcon: userIcon4,
      cardHeading: "“No more forgotten appointments”",
      cardText:
        "I'm not the most organized person, but this app has made it so easy for me to stay on top of things! I love how I can set reminders and get notifications, and it's really helped me.",
      userName: "Michel O Neil",
      userRole: "Head of sales",
    },
    {
      index: "5",
      userIcon: userIcon5,
      cardHeading: "“Saves me time”",
      cardText:
        "Since I started using this app, I've saved so much time. I no longer have to manually add appointments or set reminders - it's all done for me!",
      userName: "Kyle Conord ",
      userRole: "CEO of RoastingOS",
    },
    {
      index: "6",
      userIcon: userIcon6,
      cardHeading: "“Better than the rest”",
      cardText:
        "I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need. Game changer!",
      userName: "Annie Devy",
      userRole: "Designer",
    },
    {
      index: "7",
      userIcon: userIcon7,
      cardHeading: "“Life-changing”",
      cardText:
        "This app is so simple yet so powerful! I love how I can easily add events and see my entire schedule at a glance.",
      userName: "Kevin Douglas",
      userRole: "Product design at Lambda",
    },
    {
      index: "8",
      userIcon: userIcon8,
      cardHeading: "“Incredible UI”",
      cardText:
        "The UI of this app is just awesome, so fluid and well designed. The app has also all the features I need for my daily work. Just try it, you will fall in love!",
      userName: "Jordan Brian",
      userRole: "Marketing Freelance",
    },
    {
      index: "9",
      userIcon: userIcon9,
      cardHeading: "“Great for teamwork”",
      cardText:
        "If you're looking for a reliable and easy-to-use calendar app, look no further! This app has everything you need, and it's made my life so much easier",
      userName: "Hanna Becker",
      userRole: "Head of Marketing",
    },
  ];

  const firstSet = testimonialsCards.slice(0, 3);
  const secondSet = testimonialsCards.slice(3, 6);
  const thirdSet = testimonialsCards.slice(6, 9);

  return (
    <div
      className="hidden md:flex flex-none flex-col items-center justify-center max-w-[75rem] mx-auto md:pt-36 pt-0 "
      id="testimonials"
    >
      <div className="flex flex-none flex-col items-center justify-center">
        <div className="bg-[#F1F2F4] md:py-2 md:px-4 py-2 px-3 rounded-full font-PlusJakartaSansBold text-sm md:text-base ">
          They already love our products 😍
        </div>
        <div className="flex flex-none items-center justify-center text-center md:text-[3.25rem] text-[2rem] font-PlusJakartaSansExtraBold md:leading-[5rem] md:tracking-wider leading-[2.5rem] tracking-wider mx-6 my-6 ">
          See what our users say about us
        </div>
      </div>

      {/* First set of cards */}
      <div className={`flex flex-row gap-8 justify-center mt-5`}>
        {firstSet.map((data, index) => (
          <div className="flex flex-col w-[32rem] flex-wrap justify-center bg-white rounded-2xl border border-solid border-gray-100 h-auto py-4 px-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <img src={data.userIcon} alt="" />
                </div>
                <div className="font-PlusJakartaSansBold text-base text-slate-950 px-2">
                  {data.cardHeading}
                </div>
              </div>

              <div>⭐⭐⭐⭐⭐</div>
            </div>

            <div className="flex font-PlusJakartaSansMedium text-base text-slate-500 py-3">
              {data.cardText}
            </div>
            <div className="flex justify-between  text-sm ">
              <div className="text-slate-950 font-PlusJakartaSansBold">
                {data.userName}
              </div>
              <div className="text-slate-500 font-PlusJakartaSansRegular">
                {data.userRole}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second set of cards */}
      <div className={`flex flex-row gap-8 justify-center mt-5`}>
        {secondSet.map((data, index) => (
          <div className="flex flex-col w-[32rem] flex-wrap justify-center bg-white rounded-2xl border border-solid border-gray-100 h-auto py-4 px-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <img src={data.userIcon} alt="" />
                </div>
                <div className="font-PlusJakartaSansBold text-base text-slate-950 px-2">
                  {data.cardHeading}
                </div>
              </div>

              <div>⭐⭐⭐⭐⭐</div>
            </div>

            <div className="flex font-PlusJakartaSansMedium text-base text-slate-500 py-3">
              {data.cardText}
            </div>
            <div className="flex justify-between  text-sm ">
              <div className="text-slate-950 font-PlusJakartaSansBold">
                {data.userName}
              </div>
              <div className="text-slate-500 font-PlusJakartaSansRegular">
                {data.userRole}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Third set of cards */}
      <div className={`flex flex-row gap-8 justify-center mt-5`}>
        {thirdSet.map((data, index) => (
          <div className="flex flex-col w-[32rem] flex-wrap justify-center bg-white rounded-2xl border border-solid border-gray-100 h-auto py-4 px-3">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center">
                <div>
                  <img src={data.userIcon} alt="" />
                </div>
                <div className="font-PlusJakartaSansBold text-base text-slate-950 px-2">
                  {data.cardHeading}
                </div>
              </div>

              <div>⭐⭐⭐⭐⭐</div>
            </div>

            <div className="flex font-PlusJakartaSansMedium text-base text-slate-500 py-3">
              {data.cardText}
            </div>
            <div className="flex justify-between  text-sm ">
              <div className="text-slate-950 font-PlusJakartaSansBold">
                {data.userName}
              </div>
              <div className="text-slate-500 font-PlusJakartaSansRegular">
                {data.userRole}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
