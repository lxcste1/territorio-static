import React from "react";
import Image from "next/image";
import Link from "next/link";

const SectionCard = () => {
  const services = [
    {
      title: "Uñas",
      imageMobile: `/assets/500x300.png`,
      imageDesktop: `/assets/290x430.png`,
      url: "/servicios/uñas"
    },
    {
      title: "Pestañas",
      imageMobile: `/assets/500x300.png`,
      imageDesktop: `/assets/290x430.png`,
      url: "/servicios/pestañas"
    },
    {
      title: "Masajes",
      imageMobile: `/assets/500x300.png`,
      imageDesktop: `/assets/290x430.png`,
      url: "/servicios/masajes"
    },
  ];

  return (
    <>
      {services.map((item) => (
        <Link 
        key={item.title}
        href={item.url}
        className={`border-2 border-[#C1AC99] my-4`}
        >
          <Image
            src={item.imageMobile}
            alt={item.title}
            width={500}
            height={300}
            className={`md:hidden`}
          />
          <Image
            src={item.imageDesktop}
            alt={item.title}
            width={290}
            height={430}
            className={`md:block hidden`}
          />
          <div className={`text-center py-2 font-bold`}>
            <p>
              {item.title}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SectionCard;
