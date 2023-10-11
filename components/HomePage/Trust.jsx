import Image from "next/image";
import React from "react";

function Trust() {
  return (
    <section className="container trust">
      <div className="info">
        <span className="heading">Companies trust in QR technology</span>
        <span className="description">
          From Convenience to Confidence: Embracing QR Technology in Corporate
          Operations
        </span>
      </div>
      <div className="image-container">
        <Image src={require("../../public/assets/Logos.svg")} />
      </div>
    </section>
  );
}

export default Trust;
