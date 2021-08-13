import React, { useState } from "react";

export const Person = (props) => {
  const [isVisible, setVisible] = useState(false);
  const { name, thumbnail, ...rest } = props.person;

  return (
    <div className="card">
      {name}
      <div>
        <img src={thumbnail} alt="" loading="lazy" />
      </div>
      <div>
        <button
          onClick={() => {
            setVisible(!isVisible);
          }}
        >
          {isVisible ? "Hide details" : "Show details"}
        </button>
      </div>
      {isVisible ? (
        <div>
          {Object.keys(rest).map((key, index) => (
            <div key={index}>{`${key}: ${rest[key]}`}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
