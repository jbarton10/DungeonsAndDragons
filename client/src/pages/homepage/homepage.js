import React from "react";

function Homepage(props) {
  return (
    <div>
      <button onClick={props.toRoomCreate}>Create a new game!</button>
      <button onClick={props.toLogin}>Login to an existing character!</button>
      <button onClick={props.toCreate}>
        Create a character in an existing game!
      </button>
    </div>
  );
}

export default Homepage;
