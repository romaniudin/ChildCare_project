import React, { Component } from "react";
import { Link } from "react-router-dom";

class Specialist extends Component {
  constructor() {
    super();
    this.state = {
      displayStatus: "d-none",
      contenteditable: false,
      displayStatusSave: 'd-none'
    };
  }

  changeVisibility = (e) => {
    e.preventDefault();
    this.setState({
      displayStatus: "animated zoomIn"
    });
  };

  updateData = () => {
    this.setState({
      contenteditable: true,
      displayStatusSave: 'btn btn-success'
    })
  }

  saveChanges = (e) => {
    e.preventDefault();
    this.setState({
      displayStatusSave: "d-none",
      contenteditable: false
    });
  };

  render() {
    return (
      <div className="container main">
        <div className="row justify-content-end">
          <div className="col-md-3">
            <button type="button" className="btn btn-primary">
              <Link id="link" to="/register">
                Welcome Child Care Center Specialist
              </Link>
            </button>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4">
            <h5>
              To see the queue into your Child Center
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.changeVisibility}
              >
                press here
              </button>
            </h5>
            <div id="centerInformation" className={this.state.displayStatus}>
              There are 36 children in the waiting list into your Child Care
              Center
            </div>
          </div>

          <div className="col-md-6">
            <table className="table table-bordered" contentEditable={this.state.contenteditable}>
              <caption>Basic Information about your Child Care Center</caption>
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    Child Care card:
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Description</th>
                  <td>Amys Licensed Family Child Care</td>
                </tr>
                <tr>
                  <th scope="row">Type</th>
                  <td>Part-time</td>
                </tr>
                <tr>
                  <th scope="row">Location</th>
                  <td>7715 Muirfield Drive</td>
                </tr>
                <tr>
                  <th scope="row">Contacts</th>
                  <td>center@gmail.com, tel:604-301-1033</td>
                </tr>
                <tr>
                  <th scope="row">Free Space</th>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
            <button type="button" onClick={this.saveChanges} className={this.state.displayStatusSave}>Save Changes</button>
            <h5>
              To modify this information click <br />
              <button type="button" className="btn btn-secondary" onClick={this.updateData}>Here</button>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Specialist;
