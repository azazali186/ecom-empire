import React from "react";
import Header from "../landing/Header";
import Footer from "../landing/Footer";
import { useMediaQuery } from "@mui/material";

const MainLayout: any = ({ children }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  return (
    <>
      <div className=" bg-orange-50  h-screen">
        <Header />
        <div className={isSmallScreen ? "scrollable-container h-[90vh]" : "scrollable-container h-[80vh]"}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
