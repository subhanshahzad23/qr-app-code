import React from "react";
import QRButton from "../QRButton";
import Image from "next/image";
import Link from "next/link";

function Features() {
  const Card = ({ title, description }) => {
    return (
      <div className="card-container">
        <div className="card-icon-container">
          <Image
            className="card-icon"
            src={require("../../public/assets/feature.svg")}
          />
        </div>
        <div className="card-text-container">
          <span className="card-title">{title}</span>
          <p className="card-description">{description}</p>
          <Link href={"/"} className="button-container">
            <span className="button-text">Discover More</span>
            <Image src={require("../../public/assets/arrow-right.svg")} />
          </Link>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "Create your QR unlimited.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
    {
      title: "Advanced analytics system to optimize your QR codes.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
    {
      title: "Dynamic QR codes, manage or edit them as you wish.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
    {
      title: "CSV/XLSX data export.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
    {
      title: "Design tool to customize your code..",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
    {
      title: "Different formats to download your QR codes.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in.",
    },
  ];
  return (
    <section className="container">
      <h2 className="feature-heading">
        Stand out from your competition with MYQR
      </h2>
      <div className="feature-container">
        {data.map((item) => (
          <Card title={item.title} description={item.description} />
        ))}
      </div>
      <div className="flex mt-10 justify-center">
        <QRButton />
      </div>
    </section>
  );
}

export default Features;
