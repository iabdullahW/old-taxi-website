import React from 'react';
import saloon from "../images/saloon-car.png"
import estate from "../images/mpv.png"
import mpv from "../images/mpv.png"

const Services = () => {
  const services = [
    {
      title: "Local Taxi Services",
      description:
        "Whether you're running errands or heading out for a night on the town, our prompt and reliable local taxi services ensure you reach your destination safely and on time.",
    },
    {
      title: "Airport Transfers",
      description:
        "Start your journey stress-free with our airport transfer services. We provide convenient transportation to and from major airports, ensuring you arrive punctually for your flight or reach your destination promptly upon arrival.",
    },
    {
      title: "Business Travel Solutions",
      description:
        "Streamline your corporate travel with our tailored business services. From executive chauffeur services to priority booking options, we cater to the unique needs of business travelers, ensuring a seamless and efficient travel experience.",
    },
    {
      title: "Chauffeur Services",
      description:
        "Indulge in luxury and comfort with our chauffeur services. Whether you're attending a special event or exploring the city, our professional chauffeurs provide a VIP experience, complete with personalized service and attention to detail.",
    },
    {
      title: "Parcel Delivery",
      description:
        "Need to send a package across town? Our reliable parcel delivery service ensures your items reach their destination safely and securely, with same-day and next-day delivery options available for your convenience.",
    },
    {
      title: "Minibus Hire",
      description:
        "Planning a group outing or event? Our spacious mini buses are perfect for accommodating larger groups, providing comfortable and convenient transportation for all your passengers.",
    },
  ];

  return (
    <>
    
    <section className="bg-gray-50 py-16 w-[75%] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-medium text-yellow-500">Our Services</h2>
        <p className="text-gray-600 mt-4 w-[45%] mx-auto">
          At AK Taxis, we are committed to providing you with exceptional service and reliable transportation solutions for every journey. Contact us today to book your ride or learn more about our services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-neutral-400 shadow-lg rounded-3xl p-6 text-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 text-sm"
          >
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    <div className='w-[65%] flex justify-center mx-auto items-center gap-x-5'>
        <div className='flex flex-col items-center w-[30%] gap-y-5 max-[768px]:hidden'>
            <h1 className='font-bold text-yellow-500 text-2xl'>OUR FLEET</h1>
            <p className='font-semibold'>Here are our available vehicles!</p>
        </div>
        <div className='flex  flex-col items-center '>

        <img src={saloon}/>
        <h1 className='font-bold tex-2xl'>SALOON CAR</h1>
        </div>
        <div className='flex  flex-col items-center'>

        <img src={estate}/>
        <h1 className='font-bold tex-2xl'>ESTATE CAR</h1>
        </div>
        <div className='flex  flex-col items-center'>

        <img src={mpv}/>
        <h1 className='font-bold tex-2xl'>MPV</h1>
        </div>
    </div>
    </>
  );
};

export default Services;
