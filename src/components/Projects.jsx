import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Preview from './Preview';

export default class Banba extends Component {
  handleOnMouseOver = e => {
    if (e.target.id === 'cleite') {
      this.projectDescription +=
        'Ainm Cleite means nom-de-plume, in Irish. This project is about assistive software for Irish language learners.';
    }
    console.log(e.target.id);
  };

  state = {};
  render() {
    let projectDescription = 'a';
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
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
            >
              <i className="fas fa-palette fa-4x" style={{ color: 'brown' }} />{' '}
            </div>

            {/*  likeUs*/}

            <div
              className="col-3  text-center projectBtnContainer"
              id="likeUs"
              onMouseOver={this.state.handleOnMouseOver}
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
              onMouseOver={this.state.handleOnMouseOver}
            >
              {' '}
              <i
                className="fas fa-times fa-4x"
                style={{ color: '#BE44EE' }}
              />{' '}
            </div>
          </div>
        </div>

        <Preview projectDescription={projectDescription} />
      </div>
    );
  }
}
