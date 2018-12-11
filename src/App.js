import React, { Component } from "react";
import "./App.css";
import data from "./data/data";
import Base from "./components/Base";
import Carousel from "./components/Carousel";

class App extends Component {
  //load data
  constructor(props) {
    super(props);
    this.state = {
      carouselProperties: data.carouselProperties[0]
    };
  }
  //function to get the next carousel property
  nextProperty = () => {
    const newIndex = this.state.carouselProperties.index + 1;
    this.setState({
      carouselProperties: data.carouselProperties[newIndex]
    });
  };
  //function to get the previous carousel property
  prevProperty = () => {
    const newIndex = this.state.carouselProperties.index - 1;
    this.setState({
      carouselProperties: data.carouselProperties[newIndex]
    });
  };

  render() {
    const { carouselProperties } = this.state;
    return (
      //include three base components
      <div className="App">
        <Base layoutProperties={data.layoutProperties[0]} />
        <div className="background-container">
          <Base layoutProperties={data.layoutProperties[1]} />
          <Base layoutProperties={data.layoutProperties[2]} />
        </div>

        {/*include two buttons - prev and next */}
        <button
          onClick={() => this.prevProperty()}
          disabled={carouselProperties.index === 0}
        >
          Prev
        </button>
        <button
          onClick={() => this.nextProperty()}
          disabled={
            carouselProperties.index === data.carouselProperties.length - 1
          }
        >
          Next
        </button>
        {/*include the carousel */}
        <Carousel carouselProperties={carouselProperties} />
      </div>
    );
  }
}

export default App;
