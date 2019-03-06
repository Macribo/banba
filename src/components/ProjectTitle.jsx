import React, { Component } from 'react';

export default class ProjectTitle extends Component {
  render() {
    return (
      <div
        className="row"
        id="preview"
        style={{
          //   border: '2px solid blue',
          minHeight: '50px',
          marginTop: '5%',
          marginBottom: '0',
          paddingLeft: '120px',
          textAlign: 'center'
        }}
      >
        <h3 style={{ zIndex: '5', position: 'absolute' }}>
          {this.props.projectTitle}
        </h3>
      </div>
    );
  }
}
