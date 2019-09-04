import React from "react";
import "./App.css";
import Image from "./components/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class App extends React.Component {
  state = {
    picture: [
      "white",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "navyblue",
      "purple",
      "violet",
      "pink",
      "gray",
      "black"
    ],
    clicked: [],
    score: 0
  };

  handleClick = event => {
    if (this.state.clicked.includes(event.target.attributes.id.value)) {
      this.handleLose();
    } else {
      this.state.clicked.push(event.target.attributes.id.value);
      console.log(this.state.clicked);
      this.setState({ picture: this.shuffleArray(this.state.picture) });
      this.setState({ score: this.state.score + 1 });
      if (this.state.score == "11") {
        this.handleWin();
      }
    }
  };

  handleWin = () => {
    this.setState({ clicked: [], score: 0 });
    alert("You win!");
  };
  handleLose = () => {
    this.setState({ clicked: [], score: 0 });
    alert("you lose!");
  };

  shuffleArray = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row className="title">Clicky Name</Row>
          <Row className="score">Score: {this.state.score}</Row>
          <Row className="images">
            {this.state.picture.map(pic => {
              return <Image image={pic} id={pic} onClick={this.handleClick} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
