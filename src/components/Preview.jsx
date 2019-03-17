import React, { Component } from 'react';

export default class Preview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="row" id="preview" style={{ border: '2px solid green' }}>
          <h3> {this.props.projectDescription}</h3>
        </div>
      </div>
    );
  }
}
