import React, { Component } from 'react';

export default class ProjectPosters extends Component {
  render() {
    return (
      <div style={{}}>
        <div
          className="poster-container"
          style={{
            //   border: '10px solid blue',
            //   height: '500px',
            //   width: '500px'
            height: '340px',
            backgroundImage: 'url(' + this.props.poster + ')',
            backgroundSize: 'contain'
          }}
        />
        {/* <img id="poster-to-show" src={this.props.currentPosterToDisplay} /> */}
      </div>
    );
  }
}
