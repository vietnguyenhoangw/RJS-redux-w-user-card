import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// bootstrap components
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// redux
// import store, where the states have been store
import { store } from "./store";
// import actions
import { renameUser } from "./actions";
// imoport connect to update state after dispatch
import { connect } from 'react-redux';

class App extends Component {
  dispatchBtnAction = (e) => {
    const btnId = e.target.id;
    switch (btnId) {
      case "daniel":
        store.dispatch(renameUser("Daniel Nguyễn"));
        break;
      case "harris":
        store.dispatch(renameUser("Harris Lee"));
        break;
      case "tom":
        store.dispatch(renameUser("Tom and Jerry"));
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <h2>{store.getState().name}</h2>
          <p>
            <span className="faint">I am</span> a {"description"}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {"likes"}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{"name"}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{"location"}</span>
          </p>
        </section>

        <div className="mt-3">
          <ButtonGroup aria-label="Basic example" style={{ width: "100%" }}>
            <Button
              id="daniel"
              variant="success"
              onClick={this.dispatchBtnAction}
            >
              Daniel
            </Button>
            <Button
              id="harris"
              variant="success ml-4"
              onClick={this.dispatchBtnAction}
            >
              Harris
            </Button>
            <Button
              id="tom"
              variant="success ml-4"
              onClick={this.dispatchBtnAction}
            >
              Tom
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(App)
