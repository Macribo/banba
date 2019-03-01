import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
export default class Banba extends Component {
  render() {
    return (
      <div id="kungfu">
        <h1 id="projectsTitle">Projects</h1>

        <div className="projectMenu">
          <div className="row" id="projectRow">
            <div className="col-3  text-center projectBtnContainer">
              <i class="fas fa-feather-alt fa-4x" style={{ color: 'purple' }} />{' '}
            </div>
            <div className="col-3  text-center projectBtnContainer">
              <i
                class="fas fa-map-marker-alt fa-4x"
                style={{ color: '#04E400' }}
              />{' '}
            </div>
            <div className="col-3 text-center projectBtnContainer">
              {' '}
              <i class="fas fa-times fa-4x" style={{ color: '#BE44EE' }} />{' '}
            </div>
          </div>
          <div className="row" id="projectRow">
            <div className="col-3 text-center projectBtnContainer">
              {' '}
              <i class="fas fa-times fa-4x" style={{ color: '#BE44EE' }} />{' '}
            </div>
            <div className="col-3 text-center projectBtnContainer">
              {' '}
              <i class="fas fa-times fa-4x" style={{ color: '#BE44EE' }} />{' '}
            </div>
            <div className="col-3  text-center projectBtnContainer">
              {' '}
              <i class="fas fa-times fa-4x" style={{ color: '#BE44EE' }} />{' '}
            </div>
          </div>
          <div className="row" id="projectRow">
            <div className="col-3 text-center projectBtnContainer">
              <i class="fas fa-palette fa-4x" style={{ color: 'brown' }} />{' '}
            </div>
            <div className="col-3  text-center projectBtnContainer">
              {' '}
              <i
                class="fas fa-paw fa-4x"
                style={{ color: 'rgba(245, 132, 226, 0.8)' }}
              />{' '}
            </div>
            <div className="col-3 text-center projectBtnContainer">
              {' '}
              <i class="fas fa-times fa-4x" style={{ color: '#BE44EE' }} />{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
