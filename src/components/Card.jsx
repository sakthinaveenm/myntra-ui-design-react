import React from "react";
import "./Card.css";
export default function Card(props) {
  return (
    <div className="cards">
      {props.data.map((item) => {
        return (
          <div className="cards__item">
            <a href="#">
              <img src={item} alt="" width="100%" height="420px" />
            </a>
          </div>
        );
      })}
    </div>
  );
}
