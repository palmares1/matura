import React from 'react';

const User = (props) => {
  return (
    <div className="container">
      <h1>Użytkownik {props.match.params.id}</h1>
    </div>
  );
}

export default User;
