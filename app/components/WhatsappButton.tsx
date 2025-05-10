import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "6282277786223";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="fixed z-40 bottom-3 right-2 md:bottom-5 md:right-5 p-[6px] md:p-2 rounded-3xl bg-white border-1 border-green-600 hover:bg-gray-200 transition cursor-pointer">
        <img
          src="/assets/whatsapp.png"
          alt="Whatsapp"
          className="w-8 h-8 md:w-11 md:h-11"
          loading="lazy"
        />
      </button>
    </a>
  );
};

export default WhatsappButton;
