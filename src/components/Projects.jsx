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
    projectTitle: 'Welcome!',
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

      case 'tbdA':
        this.setState({
          projectDescription: this.descriptions[2],
          projectTitle: this.titles[2],
          poster: this.posters[2]
        });
        break;

      case 'tbdB':
        this.setState({
          projectDescription: this.descriptions[3],
          projectTitle: this.titles[3],
          poster: this.posters[3]
        });
        break;

      case 'tbdC':
        this.setState({
          projectDescription: this.descriptions[4],
          projectTitle: this.titles[4]
        });
        break;

      //rmucv etc

      case 'tbdD':
        this.setState({
          projectDescription: this.descriptions[5],
          projectTitle: this.titles[5]
        });
        break;

      case 'gallery':
        this.setState({
          projectDescription: this.descriptions[6],
          projectTitle: this.titles[6]
        });
        break;
      case 'likeUs':
        this.setState({
          projectDescription: this.descriptions[7],
          projectTitle: this.titles[7]
        });
        break;

      //linkbox-ads
      case 'tbdE':
        this.setState({
          projectDescription: this.descriptions[8],
          projectTitle: this.titles[8]
        });
        break;

      default:
        this.setState({
          projectDescription: 'Fallow Fields',
          projectTitles: 'Placeholder'
        });
        break;
    }

    console.log(this.state.projectDescription);
  };

  handleOnMouseLeave = () => {
    this.setState({
      projectDescription:
        'Mouseover a project for details. Click a project to view source or demo',

      projectTitle: 'Welcome'
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
    'placeholder',
    'placeholder',
    'Gallery',
    'likeUs',
    'placeholder'
  ];
  descriptions = [
    `"Banba" is a collection of projects related to the development of assistive software for Irish language learners.`,
    `Fuburo: The online lost and found office. www.fuburo.de`,
    `Learn To Type with Tiny Hans!`,
    `Come and see my Github sketchbooks!`,
    `Fallow field`,
    `Fallow field`,
    `Fallow field`,
    `The breakfast App`,
    `Fallow field`
  ];
  posters = [
    'https://i.imgur.com/lpOzGQX.png',
    'https://imgur.com/0Fys30V.png',
    'https://imgur.com/biWJ4Jh.png',
    'https://imgur.com/teXkfYW.png'
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
          <Col sm="12" md={{ size: 10, offset: 1 }}>
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
                {/* cleite */}

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
                <Link
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
                </Link>

                {/*  */}
                <Link
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="/A"
                  id="tbdA"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                >
                  {' '}
                  <i
                    className="fas fa-keyboard fa-4x"
                    style={{ color: '#34495E' }}
                  />{' '}
                </Link>

                {/*  */}
                <Link
                  style={{ textDecoration: 'none' }}
                  className="L col-1 text-center projectBtnContainer"
                  to="/B"
                  id="tbdB"
                  onMouseOver={this.handleOnMouseOver}
                  onMouseLeave={this.handleOnMouseLeave}
                >
                  {' '}
                  <i
                    className="fab fa-github-alt fa-4x
                "
                  />{' '}
                </Link>
                {/*  */}

                {/*  */}

                {/* gallery */}
                <Link
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
                </Link>

                {/*  likeUs*/}
                <Link
                  style={{ textDecoration: 'none' }}
                  className="L col-1  text-center projectBtnContainer"
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
                {/* <Link
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
                </Link> */}
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
