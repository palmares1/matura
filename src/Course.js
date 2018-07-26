import React from 'react';

const Course = (props) => {
  return (
    <div className="container">
      <h1>Kurs {props.match.params.id}</h1>
    </div>
  );
}

export default Course;
