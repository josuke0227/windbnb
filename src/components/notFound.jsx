import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>Sorry,</h1>
      <div> We couldn't match any stays you're looking for...</div>
      <div>
        Please click
        <span className="back" onClick={() => window.location.reload()}>
          &nbsp;here&nbsp;
        </span>
        to reload.
      </div>
    </React.Fragment>
  );
};

export default NotFound;
