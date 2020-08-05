import React from 'react';

function FavoriteCreature (props) {
  let myCreature = <h3>You have not chosen a Favorite Creature</h3>;

  if (props.creature != null
      && props.creature.length > 0
  ) {
      myCreature = <h3>Your Favorite Creature: {props.creature}</h3>;
  }

  return (
    <div className="headerBar">
      <h1>Browser Cookies</h1>
      {myCreature}
    </div>
  );
}

export default FavoriteCreature;
