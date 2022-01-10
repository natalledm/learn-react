import food from '../food.jpg';
import React, { useState, useEffect } from "react";

export default function Main(props) {
  const [mood, setMood] = useState("happy")
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`I am quite ${mood}`);
  }, [mood]);

  useEffect(() => {
    console.log(`...and ${secondary}`);
  }, [secondary]);


  return (
    <section>
      <img src={food} alt="hand holding a fork besides a bowl of vegetables" />
      <>
        <p>Current mood: {mood} and {secondary} </p>
        <button onClick={() => setMood("anger")}>Anger</button>
        <button onClick={() => setMood("happy")}>Happy</button>
        <button onClick={() => setMood("sad")}>Sad</button>
        <button onClick={() => setSecondary("tired")}>Tired</button>
        <button onClick={() => setSecondary("energetic")}>Energetic</button>
      </>
      <ul style={{ listStyle: "none" }}>
        {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
      </ul>

    </section>
  )
}
