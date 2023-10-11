import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StepCard = ({ number, title, description }) => {
  return (
    <div className="how-it-works">
      <span className="number">{number}</span>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="how-it-works-container">
      <h2>You're one step away from creating your own QR</h2>
      <div className="step-container">
        <StepCard
          number={1}
          title={"Select the content of your QR"}
          description={
            "Choose from a wide variety of options: PDF, menu, video, business cards, web, apps, etc."
          }
        />
        <StepCard
          number={2}
          title={"Customize and design it to your liking"}
          description={
            "Choose color, shape, style and the information you want to convey through your QR to get a unique design."
          }
        />
        <StepCard
          number={3}
          title={"Log in and print or download it."}
          description={
            "Choose the most suitable format for your business (pdf, png, svg, jpg...) print it or show it in digital format and that's it!"
          }
        />
      </div>
      <div className="flex justify-center">
        <Link className="hiw-button" href="/">
          Design your QR<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
