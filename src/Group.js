import React from 'react';

const Group = (props) => {
  return (
    <div className="container">
      <h1>Grupa {props.match.params.id}</h1>
    </div>
  );
}

export default Group;
