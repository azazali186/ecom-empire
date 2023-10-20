import React from "react";
import Header from "../landing/Header";
import Footer from "../landing/Footer";
import FooterMenu from "../landing/FooterMenu";

const MainLayout: any = ({ children }) => {
  return (
    <>
      <div className=" bg-orange-50  h-screen">
        <Header />
        <div className="scrollable-container h-[80vh]">{children}</div>
        
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
