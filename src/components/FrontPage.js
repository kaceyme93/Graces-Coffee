import React from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../style/FrontPage.css";

function FrontPage() {
  let history = useHistory();

  return (
    <>
      <div className="hero"></div>
    </>
  );
}

export default FrontPage;
