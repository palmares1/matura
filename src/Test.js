import React from 'react';

const Test = (props) => {
  return (
    <div className="container">
      <h1>Test {props.match.params.id}</h1>
    </div>
  );
}

export default Test;
