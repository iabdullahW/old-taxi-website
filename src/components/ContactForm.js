import React from "react";

function ContactForm() {
  return (
    <div className="flex justify-center items-center w-[100%] py-32 bg-yellow-500">
      <div className="bg-gray-800 p-8 rounded-2xl   w-[50%] shadow-2xl shadow-neutral-600 ">
        <form className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full p-3 rounded-2xl border-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-bold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-3 rounded-2xl border-none focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-white mb-2 font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-2xl border-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-white text-black rounded-2xl hover:bg-gray-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
