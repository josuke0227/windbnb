import React from "react";
import Counter from "./counter";
import PanelContainer from "../styled-components/panelContainer";

const GuestsPanel = ({
  isOpened,
  adultGuests,
  childGuests,
  onGuestNumChanged,
  currentWidth,
}) => {
  return (
    <PanelContainer
      className="guests-panel"
      id="guests-panel"
      status={isOpened}
      width={currentWidth}
    >
      <div>
        <Counter
          title="Adults"
          customerAttribution="adult"
          condition="Ages 13 or above"
          count={adultGuests}
          onGuestNumChanged={onGuestNumChanged}
        />
        <Counter
          title="Children"
          customerAttribution="child"
          condition="Ages 2 - 12"
          count={childGuests}
          onGuestNumChanged={onGuestNumChanged}
        />
      </div>
    </PanelContainer>
  );
};

export default GuestsPanel;
