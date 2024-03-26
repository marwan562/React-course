/* eslint-disable react/prop-types */
//class Component

import { Component } from "react";

class Carousel extends Component {
  state = {
    active: this.props.image[0],
  };

  render() {
    const { active } = this.state;
    const { image } = this.props;

    return (
      <div className="carousel">
        <img src={active} alt="animal-image" />
        <div className="carousel-smaller">
          {image?.map((photo, inx) => {
            return (
              <img
                key={photo}
                src={photo}
                className={image[inx] === active ? "active" : ""}
                alt="animal-img-smaller"
                onClick={() => this.setState({ active: image[inx] })}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
