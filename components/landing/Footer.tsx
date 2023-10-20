import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center flex-col px-5 py-2 mt-2 h-[100px] items-center absolute bottom-0 w-full font-bold bg-orange-400 text-orange-50">
      <div className="flex justify-between w-full px-10">
        <div className="flex flex-col w-[25%] ">
          <h1 className="text-center capitalize font-bold text-sm cursor-pointer hover:scale-110 scale-105">Sellers Terms</h1>
          <div className="flex justify-between">
            <ul>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Privacy Policies</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Terms & Conditions</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Payment Policies</Link></li>
            </ul>
            <ul>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Sign-Up</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Login</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Delivery Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-center capitalize font-bold text-sm cursor-pointer hover:scale-110 scale-105">Ecom Empire Terms</h1>
          <ul>
            <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>About Us</Link></li>
            <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Contact Us</Link></li>
          </ul>
        </div>
        <div className="flex flex-col w-[25%] ">
          <h1 className="text-center capitalize font-bold text-sm cursor-pointer hover:scale-110 scale-105">Customers Terms</h1>
          <div className="flex justify-between">
            <ul>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Privacy Policies</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Terms & Conditions</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Payment Policies</Link></li>
            </ul>
            <ul>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Order Terms & Conditions</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Support & Feedback</Link></li>
              <li className="hover:scale-105 text-xs capitalize hover:text-orange-100 cursor-pointer"><Link href={"/"}>Delivery Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute text-sm py-2 capitalize bottom-0">@2023 Ecom Empire</div>
    </div>
  );
};

export default Footer;
