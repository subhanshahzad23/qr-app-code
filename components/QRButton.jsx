import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function QRButton() {
  return (
    <Link className="header-button" href="/">
      Design your QR<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
    </Link>
  );
}

export default QRButton;
