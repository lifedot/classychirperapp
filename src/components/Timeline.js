import React, { Component } from 'react';


export default class Timeline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div id="chirpCard" className="row">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{this.props.chirp.username}</h5>
              <p className="card-text">{this.props.chirp.message}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}