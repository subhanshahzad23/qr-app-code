import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-1">
          <div className="title">Logo</div>
          <div className="footer-info">
            <div>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>8502
              Preston Rd. Inglewood, Maine 98380, USA
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              qr@walid.com
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="links">
            <Link href={"/"}>Pricing</Link>
            <Link href={"/"}>FAQs</Link>
            <Link href={""}>Contact</Link>
          </div>
          <div>© Copyright 2023, All Rights Reserved</div>
        </div>
        <Image src={require("../../public/assets/footer.svg")} />
      </div>
    </footer>
  );
}

export default Footer;
