import React from 'react';

const TaxiRates = () => {
  const rates = [
    {
      airport: "HEATHROW AIRPORT",
      price: "£90",
      description: "Wallingford to/from London Heathrow Airport + £5.00 Drop-off Charge",
      bgColor: "bg-white", // White background
    },
    {
      airport: "GATWICK AIRPORT",
      price: "£150",
      description: "Wallingford to/from London Gatwick Airport + £5.00 Drop-off Charge",
      bgColor: "bg-gray-900", // Black background
    },
    {
      airport: "LUTON AIRPORT",
      price: "£130",
      description: "Wallingford to/from London Luton Airport + £5.00 Drop-off Charge",
      bgColor: "bg-white", // White background
    },
    {
      airport: "STANSTEAD AIRPORT",
      price: "£160",
      description: "Wallingford to/from London Stanstead Airport + £7.00 Drop-off Charge",
      bgColor: "bg-gray-900", // Black background
    },
  ];

  return (
    <section className="py-16 w-[55%] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-yellow-500">Taxi Rates</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {rates.map((rate, index) => (
          <div
            key={index}
            className={`${rate.bgColor} text-center shadow-neutral-400 p-6 rounded-lg w-[100%] shadow-md transition-shadow duration-300 `}
          >
            <h3 className={`text-2xl font-bold mb-2 ${rate.bgColor === "bg-gray-900" ? "text-white" : "text-gray-900"}`}>
              {rate.airport} {rate.price}
            </h3>
            <hr className="my-4" />
            <p className={`${rate.bgColor === "bg-gray-900" ? "text-gray-300" : "text-gray-600"}`}>
              {rate.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaxiRates;
