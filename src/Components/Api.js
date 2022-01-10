import React, { useState, useEffect } from "react";

// api things
// https://api.github.com/users/natalledm


export default function Api(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>
  } else {
    return <div>No data</div>
  }
}
