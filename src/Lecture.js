import React from 'react';

const Lecture = (props) => {
  return (
    <div className="container">
      <h1>Wykład {props.match.params.id}</h1><br />
    </div>
  );
}

export default Lecture;
