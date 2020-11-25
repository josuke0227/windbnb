import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <React.Fragment>
      {props.stays.map((stay, index) => {
        const { photo, superHost, type, beds, rating, title } = stay;
        return (
          <div key={index} className="card">
            <div className="image">
              <img id="rooms" src={photo} alt="" width="395px" height="269px" />
            </div>
            <div className="meta-data">
              <div
                className="superhost"
                style={superHost ? null : { display: "none" }}
              >
                {superHost ? "SUPERHOST" : null}
              </div>
              <div className="type">{type}</div>
              <div className="beds" style={beds ? null : { display: "none" }}>
                {beds ? `.${beds} beds` : null}
              </div>
              <div className="rating">
                <div className="number">{rating}</div>
                <div className="icon">
                  <span className="material-icons star">star_rate</span>
                </div>
              </div>
            </div>
            <div className="card-title">
              <div>{title}</div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
