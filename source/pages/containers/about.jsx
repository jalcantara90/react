import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <section name="about">
        <h1>about</h1>
        <Link to="/localhost:3000/">
          Go to Home
        </Link>
        <Link to="random">
          Go to random
        </Link>
      </section>
    );
  }
}

export default About;
