import React, { Component } from 'react';

export default class ProjectTitle extends Component {
  render() {
    return (
      <div
        className="row"
        id="preview"
        style={{
          marginTop: '5%',
          marginBottom: '0',
          paddingLeft: '120px'
        }}
      >
        <h3>{this.props.title}Title</h3>
      </div>
    );
  }
}
