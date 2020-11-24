import "./locationPanel.css";
import React, { Component } from "react";

class LocationPanel extends Component {
  render() {
    const { isFocused, stays, query, currentWidth, onLiClick } = this.props;

    const places = stays.map((stay) => stay.city);
    let cities = [...new Set(places)];
    if (query)
      cities = cities.filter((c) =>
        c.toLowerCase().startsWith(query.toLowerCase())
      );

    return (
      <div
        className="location-panel"
        style={
          isFocused
            ? null
            : currentWidth <= 450
            ? { display: "none" }
            : { visibility: "hidden" }
        }
      >
        <ul>
          {cities.map((city, index) => (
            <li className="city" key={index} onClick={onLiClick}>
              <span className="material-icons">location_on</span>
              <span className="city-name">{city}, Finland</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LocationPanel;
