import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Fade } from 'reactstrap';
import { Link } from 'react-router-dom';

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

  state = { projectDescription: '' };

  descriptions = [
    `"Ainm Cleite" or "Nom-de-plume" is a collection of projects related to the development of assistive software for Irish language learners.`,
    `b`,
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
            <Link
              style={{ 'text-decoration': 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/Cleite"
              id="cleite"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              <i
                className="fas fa-feather-alt fa-4x"
                style={{ color: 'purple' }}
              />{' '}
            </Link>

            {/* fuburo */}
            <Link
              style={{ 'text-decoration': 'none' }}
              className="L col-3  text-center projectBtnContainer"
              to="/Fuburo"
              id="fuburo"
              onMouseOver={this.handleOnMouseOver}
              onMouseLeave={this.handleOnMouseLeave}
            >
              <i
                className="fas fa-map-marker-alt fa-4x"
                style={{ color: '#04E400' }}
              />{' '}
            </Link>

            {/*  */}
            <Link
              style={{ 'text-decoration': 'none' }}
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
              style={{ 'text-decoration': 'none' }}
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
              style={{ 'text-decoration': 'none' }}
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
              style={{ 'text-decoration': 'none' }}
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
              style={{ 'text-decoration': 'none' }}
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
              style={{ 'text-decoration': 'none' }}
              className="L col-3 text-center projectBtnContainer"
              to="E"
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
