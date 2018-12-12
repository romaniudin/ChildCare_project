import React, { Component } from "react";
import { Link } from "react-router-dom";

class Queue extends Component {
  constructor() {
    super();
    this.state = {
      queueNumber: 0,
      queueNumber1: 0,
      queueNumber2: 0,
      percentOfSuccess: 0,
      displayStatus: 'd-none',
      displayFirst: ''
    }
  }

  showQueue = (e) => {
    e.preventDefault();
    this.setState ({
      queueNumber: Math.floor(Math.random()*50),
      queueNumber1: Math.floor(Math.random()*30),
      queueNumber2: Math.floor(Math.random()*60),
      percentOfSuccess: Math.floor(Math.random()*100),
      displayStatus: "animated zoomIn",
      displayFirst: 'd-none'
    })
  }

  render() {
  return (
    <div className="container main">
      <div className="row justify-content-end">
        <div className="col-md-3">
          <button type="button" className="btn btn-primary">
            <Link id="link" to="/">
              Welcome Family Member User
            </Link>
          </button>
        </div>
      </div>
      <br />
      <div id='queueBody' className="row">
        <div className="col-md-4">
          <h4>Check your queue here</h4>
          <p>Enter your registration #:</p>
          <form onSubmit={ this.showQueue }>
          <input type="text" />
          </form><br />
          {/* <div className={ this.state.displayStatus }>
          <h6>Your place in queue is</h6>
          <p>{ this.state.queueNumber }</p>
          <h6>Your % of success to be enrolled to September is</h6>
          <p>{ this.state.percentOfSuccess }</p>
          </div> */}
        </div>
        <div className="col-md-7">
        <img className = { this.state.displayFirst } id='questionMark' alt='mark' src = './images/questionMark.png' />
        <img className = { this.state.displayStatus } alt='graph' src = './images/graph1.png' />
        <div className = { this.state.displayStatus }>
        <h6>Your place in <b><i>ABC University Daycare</i></b> is { this.state.queueNumber }</h6>
        <h6>Your place in <b><i>Service De Garde Les Copains</i></b> is { this.state.queueNumber2 }</h6>
        <h6>Your place in <b><i>Little Creations Montessori Preschool</i></b> is { this.state.queueNumber1 }</h6><br />
        <p>Your chance to be enrolled into ABC Child Care Center in September is <b> { this.state.percentOfSuccess } % </b></p>
        </div>
        </div>
      </div>
    </div>
  );
}};

export default Queue;
