import React, { useEffect } from "react";
import ReactGA from "react-ga";
import AdSense from "react-adsense";

export default function Home() {
  return (
    <>
      <div className="w-full h-[65vh] text-center">
        <h3 className="mt-[100px] font-semibold text-5xl">Welcome</h3>
        <p className="mt-[30px] font-medium text-3xl">to</p>
        <h1 className="mt-[30px] font-extrabold text-7xl">Beloved Thorlani</h1>
        <p className="mt-[30px] font-medium text-3xl">Home of Online</p>
        <h4 className="mt-[30px] font-bold text-4xl">Law past questions</h4>
      </div>
      {/* <AdSense.Google
        client="ca-pub-9515848627350834"
        slot="9754373653"
        style={{ display: "block" }}
        format="auto"
        responsive="true"
        layoutKey="-gw-1+2a-9x+5c"
      /> */}
    </>
  );
}
