import React from "react";
import Image from "next/image";
import QRButton from "../QRButton";

function Hero() {
  return (
    <section className="container lg:grid grid-cols-12">
      <div className="col-span-8 flex flex-col justify-center">
        <div className="header-1">
          <p className="header-heading">
            <span>Design</span>,<span> manage</span> and
            <span> track</span> your QR on a single platform
          </p>
          <p className="header-desc">
            We present you the easiest, most useful and fastest way to manage
            your QR codes.
          </p>
          <QRButton />
          <div className="hero-details">
            <Image src={require("../../public/assets/hero-people.png")} />
            <div>
              <div className="hero-heading">2,291</div>
              <div className="hero-text">Happy Customers</div>
            </div>
            <div>
              <div className="hero-heading">4.8/5</div>
              <div className="hero-text">
                <Image src={require("../../public/assets/stars.png")} />
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Image src={require("../../public/assets/hero.png")} />
      </div>
    </section>
  );
}

export default Hero;
