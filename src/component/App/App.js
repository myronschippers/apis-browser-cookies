import React, { Component } from 'react';
import './App.css';
import FavoriteCreature from '../FavoriteCreature/FavoriteCreature';
import { setCookie, getCookie } from '../../services/cookies.service';
import axios from 'axios';

class App extends Component {
  state = {
    enteredCreature: '',
    favoriteCreature: '',
  }

  componentDidMount() {
    // GET MY COOKIES
    // const favoriteCreature = getCookie('favoriteCreature');

    // make GET API call
    this.getCreature();

    // this.setState({
    //   favoriteCreature,
    // })
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

    // setCookie('favoriteCreature', creature);
    // setCookie('random', 'WHAT?');
    // setCookie('stuff', 'KittyKat');
    // setCookie('maddness', 'March?');

    this.postCreature(creature);

    this.setState({
      enteredCreature: '',
    });
  }

  //
  // API CALLS
  // ------------------------------

  getCreature() {
    axios.get('/api/creature')
      .then((response) => {
        console.log(response);
        this.setState({
          favoriteCreature: response.data.favoriteCreature,
        })
      })
      .catch((err) => {
        console.log(err);
        alert('Something FAILED!!! Do better.');
      })
  }

  postCreature(creature) {
    axios.post('/api/creature', { creature })
      .then((response) => {
        this.getCreature();
      })
      .catch((err) => {
        console.log(err);
        alert('Something FAILED!!! Not enough SAVING.');
      });
  }

  // React renders the content to the application view
  render() {
    return (
      <div>
        <FavoriteCreature creature={this.state.favoriteCreature} />

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
