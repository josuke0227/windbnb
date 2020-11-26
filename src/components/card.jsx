import React from "react";
import TextSecondary from "./styled-components/textSeconday";
import TextPrimary from "./styled-components/textPrimary";
import FlexContainer from "./styled-components/flexContainer";
import FlexItem from "./styled-components/flexItem";

import styled from "styled-components";

const Rating = styled.div`
  color: #4f4f4f;
  font-size: 14px;
`;

const SuperHost = styled.div`
  padding: 1px;
  margin-right: 0.5rem;
  font-size: var(--ss-font-size);
  color: var(--header-gray);
  border: 1px solid var(--header-gray);
  border-radius: 6px;
  text-align: center;
`;

const imageStyle = {
  width: "395px",
  height: "269px",
  borderRadius: "24px",
};

const Card = (props) => {
  return (
    <React.Fragment>
      {props.stays.map((stay, index) => {
        const { photo, superHost, type, beds, rating, title } = stay;
        return (
          <div key={index} className="card">
            <div className="image">
              <img id="rooms" src={photo} alt="" style={imageStyle} />
            </div>
            <FlexContainer direction="row" xAlign>
              <FlexItem style={superHost ? null : { display: "none" }}>
                <SuperHost>{superHost ? "SUPERHOST" : null}</SuperHost>
              </FlexItem>
              <FlexItem>
                <TextSecondary>{type}</TextSecondary>
              </FlexItem>
              <FlexItem flex="0.5" style={beds ? null : { display: "none" }}>
                <TextSecondary>{beds ? `.${beds} beds` : null}</TextSecondary>
              </FlexItem>
              <FlexItem flex="0.5">
                <FlexContainer xAlign yEnd>
                  <Rating>{rating}</Rating>
                  <div className="icon">
                    <span
                      className="material-icons"
                      style={{ color: "#eb5757" }}
                    >
                      star_rate
                    </span>
                  </div>
                </FlexContainer>
              </FlexItem>
            </FlexContainer>
            <TextPrimary size="16 ">{title}</TextPrimary>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
