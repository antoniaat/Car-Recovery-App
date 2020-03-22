import React, { Component } from "react";
import tlogo from "../../assets/images/tlogo.png";
import dealership from "../../assets/icons/dealership.png";
import prices from "../../assets/icons/prices.png";
import safety from "../../assets/icons/safety.png";

import "./Advantages.scss";
import icons from "../icons/FontAwesomeIcons";

class Advantages extends Component {
  constructor(props) {
    super(props);
    this.firstArticleClick = this.firstArticleClick.bind(this);
    this.secondArticleClick = this.secondArticleClick.bind(this);
    this.thirdArticleClick = this.thirdArticleClick.bind(this);

    this.state = {
      firstIsActive: false,
      secondIsActive: true,
      thirdIsActive: false
    };
  }

  firstArticleClick() {
    this.setState({ firstIsActive: !this.state.firstIsActive });
  }
  secondArticleClick() {
    this.setState({ secondIsActive: !this.state.secondIsActive });
  }
  thirdArticleClick() {
    this.setState({ thirdIsActive: !this.state.thirdIsActive });
  }

  render() {
    return (
      <div className="advantages">
        <article>
          <img src={tlogo} alt="logo"></img>
          <h1>Our Advantages</h1>
        </article>
        <article>
          <div
            onClick={this.firstArticleClick}
            className={this.state.firstIsActive ? "active" : "notActive"}
          >
            <img src={dealership} alt="dealership-img"></img>
            <h5>Largest Dealership</h5>
            <p>
              AutoImage is aliquip consequat to duis elit tam cillum dolore
              fugiat null pariatur excepteur sint for occaecat.
            </p>
            <button>{icons.arrowUp}</button>
          </div>
          <div
            onClick={this.secondArticleClick}
            className={this.state.secondIsActive ? "active" : "notActive"}
          >
            <img src={prices} alt="prices-img"></img>
            <h5>Lower Car Prices</h5>
            <p>
              AutoImage is aliquip consequat to duis elit tam cillum dolore
              fugiat null pariatur excepteur sint for occaecat.
            </p>
            <button>{icons.arrowUp}</button>
          </div>
          <div
            onClick={this.thirdArticleClick}
            className={this.state.thirdIsActive ? "active" : "notActive"}
          >
            <img src={safety} alt="safety-img"></img>
            <h5>Multipoint Safety</h5>
            <p>
              AutoImage is aliquip consequat to duis elit tam cillum dolore
              fugiat null pariatur excepteur sint for occaecat.
            </p>
            <button>{icons.arrowUp}</button>
          </div>
        </article>
      </div>
    );
  }
}

export default Advantages;