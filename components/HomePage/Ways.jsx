import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import QRButton from "../QRButton";

function Ways() {
  const Card = ({ icon, title }) => {
    return (
      <div className="way-card">
        <div className="way-icon-container">
          <Image src={icon} />
        </div>
        <span className="way-title">{title}</span>
      </div>
    );
  };
  const data = [
    {
      title: "Restaurant",
      icon: require("../../public/assets/ways/way-1.svg"),
    },
    {
      title: "List Link",
      icon: require("../../public/assets/ways/way-2.svg"),
    },
    {
      title: "Video",
      icon: require("../../public/assets/ways/way-3.svg"),
    },
    {
      title: "Wifi",
      icon: require("../../public/assets/ways/way-4.svg"),
    },
    {
      title: "App",
      icon: require("../../public/assets/ways/way-5.svg"),
    },
    {
      title: "Web page",
      icon: require("../../public/assets/ways/way-6.svg"),
    },
    {
      title: "B Card",
      icon: require("../../public/assets/ways/way-7.svg"),
    },
    {
      title: "Shop",
      icon: require("../../public/assets/ways/way-8.svg"),
    },
    {
      title: "Pdf",
      icon: require("../../public/assets/ways/way-9.svg"),
    },
    {
      title: "Photo",
      icon: require("../../public/assets/ways/way-10.svg"),
    },
  ];
  return (
    <section className="way">
      <div className="container">
        <h2>Create, manage and analyze your QR</h2>
        <p className="way-p">
          A single QR code can redirect to any kind of digital content, they
          offer a wide range of options and MYQR offers them all.
        </p>
        <div className="cards">
          {data.map((item) => (
            <Card title={item.title} icon={item.icon} />
          ))}
        </div>
        <div className="way-info">
          <div className="image">
            <Image src={require("../../public/assets/restraunt.svg")} />
            <button className="left">
              <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
            </button>
          </div>
          <div className="way-detail">
            <span className="way-title">Restaurant</span>
            <p className="way-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
            </p>
            <QRButton />
            <button className="right">
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ways;
