import "./card.css";
import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      {props.stays.map((stay, index) => {
        return (
          <div key={index} className="card">
            <div className="image">
              {/* <img id="rooms" src={stay.photo} alt="" /> */}
              <img
                id="rooms"
                src={stay.photo}
                alt=""
                width="395px"
                height="269px"
              />
            </div>
            <div className="meta-data">
              <div
                className="superhost"
                style={stay.superHost ? null : { display: "none" }}
              >
                {stay.superHost ? "SUPERHOST" : null}
              </div>
              <div className="type">{stay.type}</div>
              <div
                className="beds"
                style={stay.beds ? null : { display: "none" }}
              >
                {stay.beds ? `.${stay.beds} beds` : null}
              </div>
              <div className="rating">
                <div className="number">{stay.rating}</div>
                <div className="icon">
                  <span className="material-icons star">star_rate</span>
                </div>
              </div>
            </div>
            <div className="card-title">
              <div>{stay.title}</div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
