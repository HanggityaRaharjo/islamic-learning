import React from "react";
import BottomNavigation from "./components/BottomNavigation";

const Layout = ({ children }) => {
  return (
    <main className="bg-white min-h-screen flex justify-center font-poppins w-full">
      <div className="w-full">{children}</div>
      <BottomNavigation />
    </main>
  );
};

export default Layout;
