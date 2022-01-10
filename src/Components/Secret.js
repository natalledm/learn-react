
import { useReducer } from "react";

function SecretMessage() {
  return <p>Seeeecreeeet!!!</p>;
}

function NormalMessage() {
  return <p>Hello!</p>;
}

export default function Secret(props) {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return (
    <section>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p> {checked ? "checked" : "not checked"} </p>
      <p>
        {props.authorized ? <SecretMessage /> : <NormalMessage />}
      </p>
    </section>

  )
}