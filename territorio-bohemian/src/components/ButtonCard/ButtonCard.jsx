import React from "react";
import Link from "next/link";

const ButtonCard = ({ buttonText, url }) => {
  return <Link className={`m-auto mt-8 mb-3 px-4 py-1 bg-[#FFF3E3] border-2 border-[#C1AC99] rounded-sm`} href={url} >{buttonText}</Link>;
};

export default ButtonCard;
