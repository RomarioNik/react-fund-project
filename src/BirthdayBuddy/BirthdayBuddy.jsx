import { useState } from "react";
import "./birthdayBuddy.css";
import data from "./data";
import { Person } from "./Person";

export const BirthdayBuddy = () => {
  const [people, setPeople] = useState(data);

  const clearAllPerson = () => {
    setPeople([]);
  };

  return (
    <section className="container">
      <h3>{people.length} birthdays today</h3>

      <ul>
        {people.length > 0 &&
          people.map((person) => <Person key={person.id} {...person} />)}
      </ul>

      <button className="btn btn-block" type="button" onClick={clearAllPerson}>
        clear all
      </button>
    </section>
  );
};
