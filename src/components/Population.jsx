import React from "react";
import { Person } from "./Person";

export const Population = (props) => {
  const { peopleList } = props;

  return (
    <div className="cards-list">
      {peopleList.map(({ id, ...person }) => (
        <div key={id}>
          <Person person={person} />
        </div>
      ))}
    </div>
  );
};
