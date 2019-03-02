import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import Preview from './Preview';

export default class Banba extends Component {
  handleOnMouseOver = e => {
    switch (e.target.id) {
      case 'cleite':
        this.setState({
          projectDescription: this.descriptions[0]
        });
        break;

      case 'fuburo':
        this.setState({
          projectDescription: this.descriptions[1]
        });
        break;

      case 'tbdA':
        this.setState({
          projectDescription: this.descriptions[2]
        });
        break;

      case 'tbdB':
        this.setState({
          projectDescription: this.descriptions[3]
        });
        break;

      case 'tbdC':
        this.setState({
          projectDescription: this.descriptions[4]
        });
        break;

      case 'tbdD':
        this.setState({
          projectDescription: this.descriptions[5]
        });
        break;

      case 'gallery':
        this.setState({
          projectDescription: this.descriptions[6]
        });
        break;

      case 'likeUs':
        this.setState({
          projectDescription: this.descriptions[7]
        });
        break;

      case 'tbdE':
        this.setState({
          projectDescription: this.descriptions[8]
        });
        break;

      default:
        this.setState({
          projectDescription: ''
        });
        break;
    }

    console.log(this.state.projectDescription);
  };

  handleOnMouseLeave = () => {
    this.setState({ projectDescription: '' });
  };

  handleClick = e => {
    switch (e.target.id) {
      case 'cleite':
        window.location.replace('https://macribo.github.io/ainmCleite');

        break;

      case 'fuburo':
        window.location.replace('https://fuburo.de');

        break;
      default:
        break;
    }
  };
  state = { projectDescription: '' };

  descriptions = [
    `"Banba" is a collection of projects related to the development of assistive software for Irish language learners. Prototype in jQuery, Bootstrap and Vanilla JS. `,
    `"Fuburo.de" is a React/Redux web-app with a Mongo/Mongoose backend. It provides an online 'Fundbüro' complete with Google Maps API, User Login and Messaging service.`,
    `c`,
    `d`,
    `e`,
    `f`,
    `g`,
    `h`,
    `i`
  ];

  render() {
    return (
      <div id="kungfu">
        <div className="projectMenu">
          <div className="row" id="projectRow">
            {/* cleite */}
            <div
              style={{ textDecoration: 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/E"
              id="cleite"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
              onClick={this.handleClick}
            >
              <i
                className="fas fa-feather-alt fa-4x"
                style={{ color: 'purple' }}
              />{' '}
            </div>

            {/* fuburo */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/Fuburo"
              id="fuburo"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
              onClick={this.handleClick}
            >
              <i
                className="fas fa-map-marker-alt fa-4x"
                style={{ color: '#04E400' }}
              />{' '}
            </Link>

            {/*  */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="/A"
              id="tbdA"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </Link>
          </div>
          {/*close first row */}

          <div className="row" id="projectRow">
            {/*  */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="/B"
              id="tbdB"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </Link>
            {/*  */}

            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="/C"
              id="tbdC"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </Link>
            {/*  */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/D"
              id="tbdD"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </Link>
          </div>
          {/* ^end of second row */}

          <div className="row" id="projectRow">
            {/* gallery */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="/Gallery"
              id="gallery"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              <i className="fas fa-palette fa-4x" style={{ color: 'brown' }} />{' '}
            </Link>

            {/*  likeUs*/}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/Likeus"
              id="likeUs"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-paw fa-4x"
                style={{ color: 'rgba(245, 132, 226, 0.8)' }}
              />{' '}
            </Link>
            {/*  */}
            <Link
              style={{ textDecoration: 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="/E"
              id="tbdE"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </Link>
          </div>
        </div>{' '}
        <Preview projectDescription={this.state.projectDescription} />
      </div>
    );
  }
}
