import Image from "next/image";
import React from "react";

function Steps() {
  const Card = ({ title, description, image }) => {
    return (
      <div className="design-card">
        <div className="icon-container">
          <div className="icon-wrapper">
            <Image className="icon" src={image} />
          </div>
          <div className="text-container">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "Choose your design",
      description:
        "A high-performance workplace results from continually physical environment and technology.",
      image: require("../../public/assets/design-card-1.svg"),
    },
    {
      title: "Analytical tracking",
      description:
        "A high-performance workplace results from continually physical environment and technology.",
      image: require("../../public/assets/design-card-2.svg"),
    },
    {
      title: "Dynamize and edit your QR",
      description:
        "A high-performance workplace results from continually physical environment and technology.",
      image: require("../../public/assets/design-card-3.svg"),
    },
  ];
  return (
    <section className="container design-container">
      {data.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </section>
  );
}

export default Steps;
