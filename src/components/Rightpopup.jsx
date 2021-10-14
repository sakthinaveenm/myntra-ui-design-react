import "./RightPopup.css";
import React, { useState } from "react";

export default function Rightpopup() {
  const [pop, Setpop] = useState(false);
  return (
    <div
      className={`right ${pop ? "wid" : ""}`}
      onClick={() => {
        pop ? Setpop(false) : Setpop(true);
      }}
    >
      Flat $500 OFF
      {pop ? (
        <div className="verti">
          <p>Coupon Code : AXVFTG</p>
        </div>
      ) : null}
    </div>
  );
}
