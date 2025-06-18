import React from "react";
import { Helmet } from '@dr.pogodin/react-helmet';

import Topbar from "./topbar";
import Footer from "./footer";
import Ribbons from "../../ribbon"; // Make sure this path is correct

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-300">

      {/* ✅ Ribbons Background */}
      <div className="absolute inset-0 z-0">
        <Ribbons
          baseThickness={40}
          colors={['#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={true}
          enableShaderEffect={true}
        />
      </div>

      {/* ✅ Main Content Above Ribbons */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        <Helmet>
          <title>Zelion Store</title>
        </Helmet>
        <Topbar />
        <main className="flex-grow p-4">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
