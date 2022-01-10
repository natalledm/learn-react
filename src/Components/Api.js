import React, { useState, useEffect } from "react";

// api things
// https://api.github.com/users/natalledm
// JSON.stringify(data) = transforms the json object in a string


export default function Api(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h3>{data.name}</h3>
        <p>Url:  <a href={`${data.url}`}>Github api data</a></p>
        
      </div>
    ); 
  } else {
    return <div>No data</div>
  }
}
