import React, { Component } from 'react';

export default class Preview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="row" id="preview">
          {this.props.projectDescription}
        </div>
      </div>
    );
  }
}