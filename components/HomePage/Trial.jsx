import Image from "next/image";
import Link from "next/link";
import React from "react";

function Trial() {
  return (
    <section className="container trial-wrapper">
      <div className="trial">
        <div className="trial-info">
          <h2>Start you free trial</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet
            pellentesque aliquam enim.
          </p>
          <Link className="header-button" href={"/"}>
            Get Started
          </Link>
        </div>
        <div className="trial-image">
          <Image src={require("../../public/assets/trial.svg")} />
        </div>
      </div>
    </section>
  );
}

export default Trial;
