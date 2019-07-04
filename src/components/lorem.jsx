import React from "react";

const Lorem = ({ info }) => {
  return (
    <div className="lorem-section">
      <h1>{info}</h1>
      <svg height="100" width="100">
        <circle id="circle" cx="40" cy="55" r="10" fill="#ff5959" />
      </svg>
    </div>
  );
};

export default Lorem;
