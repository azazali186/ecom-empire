/* eslint-disable @next/next/no-img-element */
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TranslateIcon from "@mui/icons-material/Translate";
import Link from "next/link";
import { TextField, useMediaQuery } from "@mui/material";
import Image from "next/image";
import SearchInputButton from "../common/input/SearchInputButton";
const Header = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <div className="flex justify-between px-5 py-2 mb-3 items-center sticky top-0 font-bold shadow-md  bg-orange-400 text-orange-50">
      <div className="left flex gap-2 justify-center items-center">
        <div className="cursor-pointer">
          <Link href={"/"}>
            <Image
              src="https://picsum.photos/seed/picsum/200/300"
              alt="logo"
              className="w-[40px] h-[40px] rounded-md"
              width={40}
              height={40}
            />
          </Link>
        </div>
        {!isSmallScreen && (
          <h1 className={`cursor-pointer hover:scale-110 ml-5 text-xl`}>
            <Link href={"/"}>Ecom Empire</Link>
          </h1>
        )}
      </div>
      <div>
        <SearchInputButton />
      </div>
      <div className="right flex">
        {
          !isSmallScreen && (
            <div className="flex gap-8 justify-center text-sm items-center mr-20 ">
          <div className="cursor-pointer hover:scale-125">
            <Link href={"/auth/login"}>Login</Link>
          </div>
          <div className="cursor-pointer hover:scale-125">
            <Link href={"/auth/sign-up"}>Sign-up</Link>
          </div>
          <div className="cursor-pointer hover:scale-125 ">
            <Link href={"/become-a-seller"}>Become A Seller</Link>
          </div>
        </div>
          )
        }
        <ul className="flex gap-5 text-sm justify-center items-center">
          {!isSmallScreen && (
            <>
            <li className="cursor-pointer hover:scale-125 ">
            <LocationOnIcon />
          </li>
          <li className="cursor-pointer hover:scale-125 ">
            <Link href={"/wishlist"}>
              <FavoriteIcon />
            </Link>
          </li>
          <li className="cursor-pointer hover:scale-125 ">
            <NotificationsIcon />
          </li>
          <li className="cursor-pointer hover:scale-125 ">
            <ShoppingCartIcon />
          </li>
          <li className="cursor-pointer hover:scale-125 ">
            <TranslateIcon />
          </li>
            </>
          )}
          <li className="cursor-pointer">
            <div className="flex justify-center items-center">
              <Image
                src="https://picsum.photos/seed/picsum/200/300"
                alt="logo"
                className="w-[40px] h-[40px] rounded-full"
                width={40}
                height={40}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
