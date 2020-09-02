import React from "react";

const LoadingScreen = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.text}</div>
    </div>
  );
};

LoadingScreen.defaultProps = {
  text: "Loading...",
};
export default LoadingScreen;
