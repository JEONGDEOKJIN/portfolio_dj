import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-white text-gray-950 w-full h-full">
        <Header>
          {children}
          <Footer />
        </Header>
        
      </div>
    </>
  );
};

export default layout;
