import React from 'react';

const ProgrammingTask = (props) => {
  return (
    <div className="container">
      <h1>Zadanie programistyczne {props.match.params.id}</h1>
    </div>
  );
}

export default ProgrammingTask;
