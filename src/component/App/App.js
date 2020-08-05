import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    enteredCreature: '',
    favoriteCreature: '',
  }

  // tracking what the user enters into the form field
  changeFavoriteAnimal = (event) => {
    this.setState({
      enteredCreature: event.target.value,
    });
  }

  // Saving the creature entered into the form field to local state
  saveCreature = (event) => {
    const creature = this.state.enteredCreature;

    this.setState({
      enteredCreature: '',
      favoriteCreature: creature,
    });
  }

  // React renders the content to the application view
  render() {
    let myCreature = <h3>You have not chosen a Favorite Creature</h3>;

    if (this.state.favoriteCreature != null
        && this.state.favoriteCreature.length > 0
    ) {
        myCreature = <h3>Your Favorite Creature: {this.state.favoriteCreature}</h3>;
    }

    return (
      <div>
        <div className="headerBar">
          <h1>Browser Cookies</h1>
          {myCreature}
        </div>

        <div className="container">
          <label className="formField">
            <div>Favorite Fantastic Creature:</div>
            <input
              type="text"
              placeholder="Name of creature"
              value={this.state.enteredCreature}
              onChange={this.changeFavoriteAnimal}
            />
          </label>
          <button
            className="btn"
            onClick={this.saveCreature}
          >
            Save My Creature
          </button>
        </div>
      </div>
    );
  }
}

export default App;
