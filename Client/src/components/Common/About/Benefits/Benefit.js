import React from "react";

import "./Benefit.scss";

const Benefit = props => {
  return (
    <div className="Benefit">
      <div className="icon-box">
        <span>{props.benefits.icon}</span>
      </div>
      <div className="content-box">
        <p className="title">{props.benefits.title}</p>
        <p className="subtitle">{props.benefits.subtitle}</p>
      </div>
    </div>
  );
};

export default Benefit;
