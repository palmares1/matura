import React from 'react';

const Exercise = (props) => {
  return (
    <div className="container">
      <h1>Lekcja {props.match.params.id}</h1>
    </div>
  );
}

export default Exercise;
