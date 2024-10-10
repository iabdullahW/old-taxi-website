import React from "react";
import callingtaxi from "../images/calling-taxi-qntn9xh2sczt61v1gj6f955muqu8ty6b7lbmjgj6oo.jpg";

const About = () => {
  return (
    <div className="w-full bg-white ">
      <div className="w-[50%] mx-auto flex items-center my-10 gap-x-5 max-[768px]:flex-col max-[425px]:w-[80%]">
        <div className="w-[45%] rounded-2xl max-[768px]:w-full">
          <img src={callingtaxi} className="rounded-2xl"/>
        </div>
        <div className="w-[55%] flex flex-col gap-y-5 max-[768px]:w-full">
          <h1 className="text-yellow-500 text-xl font-bold">About AK Taxis</h1>
          <p className="text-gray-600 text-md"> At AK Taxis, we are dedicated to providing reliable and efficient transportation solutions to our valued customers. With years of experience in the industry, we have established ourselves as a trusted name in the business. Our commitment to excellence is evident in every aspect of our service, from the professionalism of our drivers to the cleanliness and comfort of our vehicles.</p>
          <p className="text-gray-600 text-md">We understand the importance of punctuality and reliability when it comes to transportation, which is why we go above and beyond to ensure that our customers reach their destinations safely and on time. Whether you’re heading to the airport, exploring the local area, or attending a special event, you can rely on AK Taxis to get you there with ease.</p>
          <p className="text-gray-600 text-md">At AK Taxis, customer satisfaction is our top priority. We strive to exceed expectations with every journey, providing personalized service that meets the unique needs of each individual customer. From our convenient online booking system to our friendly and knowledgeable staff, we are here to make your travel experience as seamless and enjoyable as possible.</p>
          <p className="text-gray-600 text-md"> Thank you for choosing AK Taxis for your transportation needs. We look forward to serving you and exceeding your expectations every step of the way.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
