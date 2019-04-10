import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ProjectTitle from './ProjectTitle';
import ProjectPosters from './ProjectPosters';

// import { Fade } from 'reactstrap';
import { Link } from 'react-router-dom';

import Preview from './Preview';

export default class Banba extends Component {
  //\VvvvvvvvvV\STATE\\VvvvvvvvvV\STATE\\VvvvvvvvvV\STATE\

  state = {
    projectDescription:
      'Mouseover a project to see details. Click to view demo/source',
    projectTitle: 'Project Viewer',
    poster: ''
  };
  //^^^^^^^^\STATE\//^^^^^^^^\STATE\//^^^^^^^^\STATE\

  handleOnMouseOver = e => {
    switch (e.target.id) {
      case 'banba':
        this.setState({
          projectDescription: this.descriptions[0],
          projectTitle: this.titles[0],
          poster: this.posters[0]
        });
        break;

      case 'fuburo':
        this.setState({
          projectDescription: this.descriptions[1],
          projectTitle: this.titles[1],
          poster: this.posters[1]
        });
        break;

      case 'tinyH':
        this.setState({
          projectDescription: this.descriptions[2],
          projectTitle: this.titles[2],
          poster: this.posters[2]
        });
        break;

      case 'macR':
        this.setState({
          projectDescription: this.descriptions[3],
          projectTitle: this.titles[3],
          poster: this.posters[3]
        });
        break;

      case 'gallery':
        this.setState({
          projectDescription: this.descriptions[4],
          projectTitle: this.titles[4],
          poster: this.posters[4]
        });
        break;

      //rmucv etc

      case 'likeUs':
        this.setState({
          projectDescription: this.descriptions[5],
          projectTitle: this.titles[5],
          poster: this.posters[5]
        });
        break;

      default:
        this.setState({
          projectDescription: 'Click project to select',
          projectTitles: 'Hover for description'
        });
        break;
    }

    console.log(this.state.projectDescription);
  };

  handleOnMouseLeave = () => {
    this.setState({
      projectDescription:
        'Mouseover a project for details. Click a project to view source or demo',

      projectTitle: 'Welcome',
      poster: ''
    });
  };

  handleMouseClick = e => {
    switch (e.target.id) {
      case 'banba':
        window.open('https://macribo.github.io/ainmCleite/');
        break;
      case 'fuburo':
        window.open('https://fuburo.de');
        break;

      case 'tinyH':
        window.open('https://github.com/Macribo/a_is_for');
        break;
      case 'macR':
        window.open('https://github.com/Macribo');
        break;
      case 'gallery':
        break;
      case 'likeUs':
        window.open('https://macribo.github.io/likeUs/');
        break;
      default:
        break;
    }
  };
  //^^^^^^^^\FUNCTIONS\//^^^^^^^^\FUNCTIONS\//^^^^^^^^\FUNCTIONS\

  titles = [
    'Banba',
    'Fuburo',
    'Tiny Hans',
    'Web Development',
    'Gallery',
    'LikeUs'
  ];
  descriptions = [
    `"Banba" is a collection of projects related to the development of assistive software for Irish language learners.`,
    `Fuburo: The online lost and found office. www.fuburo.de`,
    `Learn To Type with Tiny Hans!`,
    `Come and see my Github sketchbooks!`,
    `Gallery of my artwork (coming soon!)`,
    `The breakfast App`
  ];
  posters = [
    // '../../images/a.png',
    //banba
    'https://i.imgur.com/lpOzGQX.png',
    //fuburo
    'https://imgur.com/0Fys30V.png',
    //tinyhans
    'https://imgur.com/biWJ4Jh.png',
    //github
    'https://i.imgur.com/44ihjDc.png',
    //gallery
    'https://i.imgur.com/9TQ1cxn.png',
    //likeus
    'https://i.imgur.com/OS0mx0V.png'
  ];

  render() {
    return (
      <div
        id="kungfu"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <Row id="stack-row-elements">
          <Col sm="12" md={{ size: 12, offset: 0 }}>
            <h1 className="display-3" style={{ paddingTop: '30px' }}>
              {<ProjectTitle projectTitle={this.state.projectTitle} />}
            </h1>
            <Preview projectDescription={this.state.projectDescription} />
          </Col>
          <Col sm="12" md={{ size: 8, offset: 2 }} className="center-block">
            <div style={{ textAlign: 'center' }}>
              <ProjectPosters
                className="img-responsive"
                poster={this.state.poster}
              />
            </div>
            <div
              className="projectMenu"
              align="center"
              style={{ marginTop: '0' }}
            >
              <div className="row" id="projectRow" align="center">
                {/* banba */}

                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1  text-center projectBtnContainer"
                  id="banba"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                  onClick={this.handleMouseClick}
                >
                  <i
                    className="fas fa-feather-alt fa-4x"
                    style={{ color: 'purple' }}
                  />{' '}
                </div>

                {/* fuburo */}
                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1  text-center projectBtnContainer"
                  to="/Fuburo"
                  id="fuburo"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                  onClick={this.handleMouseClick}
                >
                  <i
                    className="fas fa-map-marker-alt fa-4x"
                    style={{ color: '#04E400' }}
                  />{' '}
                </div>

                {/*  */}
                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="/A"
                  id="tinyH"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                  onClick={this.handleMouseClick}
                >
                  {' '}
                  <i
                    className="fas fa-keyboard fa-4x"
                    style={{ color: '#34495E' }}
                  />{' '}
                </div>

                {/*  */}
                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="/B"
                  id="macR"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                  onClick={this.handleMouseClick}
                >
                  {' '}
                  <i
                    className="fab fa-github-alt fa-4x
                "
                  />{' '}
                </div>
                {/*  */}

                {/*  */}

                {/* gallery */}
                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="/Gallery"
                  id="gallery"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                >
                  <i
                    className="fas fa-palette fa-4x"
                    style={{ color: 'brown' }}
                  />{' '}
                </div>

                {/*  likeUs*/}
                <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1  text-center projectBtnContainer"
                  id="likeUs"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                  onClick={this.handleMouseClick}
                >
                  {' '}
                  <i
                    className="fas fa-paw fa-4x"
                    style={{ color: 'rgba(245, 132, 226, 0.8)' }}
                  />{' '}
                </div>
                {/*  */}
                {/* <div
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="E"
                  id="tbdE"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                >
                  {' '}
                  <i
                    className="fas fa-crow fa-4x"
                    style={{ color: 'rgb(78, 73, 83)' }}
                  />{' '}
                </div> */}
              </div>
            </div>{' '}
            <p className="lead">
              {/* <Button color="primary">Learn More</Button> */}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
