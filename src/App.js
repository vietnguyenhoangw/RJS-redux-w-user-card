import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";

import reducer from "./reducers";
import { createStore } from "redux"; //an import from the redux library

// this is the initial value passed
const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost",
};

// this method will create store
// Reducer: only this parameters is requite for createStore()
// initialState: is second parameters passed to createStore()
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    const { name, description, likes, location } = store.getState();

    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <h2>{name}</h2>
          <p>
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
