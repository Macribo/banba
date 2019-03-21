import React, { Component } from 'react';

export default class Preview extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center'
        }}
      >
        <div className="row" id="preview" style={{ padding: '10px' }}>
          {this.props.projectDescription}
        </div>
      </div>
    );
  }
}
