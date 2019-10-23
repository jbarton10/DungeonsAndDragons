import React from "react";

function Homepage(props) {
  return (
    <div>
      <h1>WE HERE</h1>
      <button onClick={props.toLogin}>CLICK FOR LOGIN</button>
    </div>
  );
}

export default Homepage;
