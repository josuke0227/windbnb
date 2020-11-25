import React from "react";
import "./locationPanel.css";

const LocationPanel = ({
  isFocused,
  stays,
  query,
  currentWidth,
  onLiClick,
}) => {
  const places = stays.map((stay) => {
    return { city: stay["city"], country: stay["country"] };
  });

  let extractedPlaces = [];
  let hashMap = new Map();

  for (let i = 0; i < places.length; i++) {
    const current = places[i];
    if (!hashMap.has(current.city)) {
      hashMap.set(current.city, true);
      extractedPlaces.push(current);
    } else {
      continue;
    }
  }

  if (query)
    extractedPlaces = extractedPlaces.filter((p) =>
      p.city.toLowerCase().startsWith(query.toLowerCase())
    );

  return (
    <div
      className="location-panel"
      id="location-panel"
      style={
        isFocused
          ? null
          : currentWidth <= 450
          ? { display: "none" }
          : { visibility: "hidden" }
      }
    >
      <ul>
        {extractedPlaces.map((place, index) => (
          <li className="city" key={index} id={index}>
            <span className="material-icons" id="location-icon">
              location_on
            </span>
            <span
              className="city-name"
              id="city-name"
              onClick={() => onLiClick(place.city, place.country)}
            >
              {place.city}, {place.country}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationPanel;
