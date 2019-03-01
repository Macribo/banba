import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

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

  state = { projectDescription: '' };

  descriptions = [
    `"Ainm Cleite" means Nom-de-plume, in Irish. 
  The Cleite project is about assistive software for Irish language learners.`,
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
    // to be shown in preview

    return (
      <div id="kungfu">
        <h1 id="projectsTitle">Projects</h1>

        <div className="projectMenu">
          <div className="row" id="projectRow">
            {/* cleite */}
            <div
              className="col-3  text-center projectBtnContainer"
              id="cleite"
              onMouseOver={this.handleOnMouseOver}
            >
              <i
                className="fas fa-feather-alt fa-4x"
                style={{ color: 'purple' }}
              />{' '}
            </div>

            {/* fuburo */}
            <div
              className="col-3  text-center projectBtnContainer"
              id="fuburo"
              onMouseOver={this.handleOnMouseOver}
            >
              <i
                className="fas fa-map-marker-alt fa-4x"
                style={{ color: '#04E400' }}
              />{' '}
            </div>

            {/*  */}
            <div
              className="col-3 text-center projectBtnContainer"
              id="tbdA"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
          </div>

          <div className="row" id="projectRow">
            {/*  */}
            <div
              className="col-3 text-center projectBtnContainer"
              id="tbdB"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
            {/*  */}
            <div
              className="col-3 text-center projectBtnContainer"
              id="tbdC"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
            {/*  */}
            <div
              className="col-3  text-center projectBtnContainer"
              id="tbdD"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
          </div>
          <div className="row" id="projectRow">
            {/* gallery */}
            <div
              className="col-3 text-center projectBtnContainer"
              id="gallery"
              onMouseOver={this.handleOnMouseOver}
            >
              <i className="fas fa-palette fa-4x" style={{ color: 'brown' }} />{' '}
            </div>

            {/*  likeUs*/}

            <div
              className="col-3  text-center projectBtnContainer"
              id="likeUs"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-paw fa-4x"
                style={{ color: 'rgba(245, 132, 226, 0.8)' }}
              />{' '}
            </div>
            {/*  */}
            <div
              className="col-3 text-center projectBtnContainer"
              id="tbdE"
              onMouseOver={this.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
          </div>
        </div>

        <Preview projectDescription={this.state.projectDescription} />
      </div>
    );
  }
}
