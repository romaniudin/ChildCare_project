import React, { Component } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { Link } from "react-router-dom";
import CenterPin from "./Center-pin";
import CenterPinGreen from "./PinGreen";
import axios from "axios";
import CenterPinDarkRed from "./PinDarkRed";

const TOKEN =
  "pk.eyJ1Ijoicm9tYW5pdWRpbiIsImEiOiJjanAwYjY2NGYzMnlkM3dtb29vb29ldjVhIn0.I2c4K_CSKjFStZakh2l9_g";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      CentersList: [],
      center_name: "",
      id: 0,
      value: "",
      displayStatus: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/")
      .then(response => {
        this.setState({ CentersList: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      id: Math.floor(Math.random() * Number(e.target.value)),
      displayStatus: 'animated bounce'
    });
  }

  render() {
    return (
      <div className="container align-items-center main">
        <div className="row justify-content-end">
          <div className="col-md-3">
            <button id='homeButton' type="button" className="btn btn-primary">
              <Link id="link" to="/register">
                Log In
              </Link>
            </button>
          </div>
        </div>
        <br />
        {this.state.CentersList.length > 0 && (
          <div className="row">
            <div className="col-md-4 shadow-lg p-3 bg-white rounded">
              {/* <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Age Group
                  </span>
                </div>
                <select className="form-control">
                  <option>0-18 months</option>
                  <option>19-36 months</option>
                  <option>2.5-5 years</option>
                  <option>5-12 years</option>
                </select>
              </div> */}
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Neighborhoods
                  </span>
                </div>
                <select
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="0">3544 West 1st Avenue</option>
                  <option value="1">1 Kingsway</option>
                  <option value="2">4595 West 8th Avenue</option>
                  <option value="3">7715 Muirfield Drive</option>
                  <option value="4">3455 West King Edward Ave</option>
                  <option value="5">2815 Revelstoke Court</option>
                  <option value="6">4474 Rupert Street</option>
                  <option value="7">401-345 Robson Street</option>
                  <option value="8">1859 West 15th Avenue</option>
                  <option value="9">3575 Kaslo Street</option>
                </select>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Age Group
                  </span>
                </div>
                <select className="form-control">
                  <option>0-18 months</option>
                  <option>19-36 months</option>
                  <option>2.5-5 years</option>
                  <option>5-12 years</option>
                </select>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Type of Child Care
                  </span>
                </div>
                <select className="form-control">
                  <option>Part-time</option>
                  <option>Full-time</option>
                </select>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Price per month
                  </span>
                </div>
                <select className="form-control">
                  <option>Up to $600</option>
                  <option>$600-$900</option>
                  <option>$900-$1200</option>
                </select>
              </div>
              <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    Special Needs
                  </span>
                </div>
                <select className="form-control">
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <br />
              <button type="button" className="btn btn-secondary">
                Submit Search
              </button>
            </div>
            <div className="col-md-8">
              <Map displayStatus={this.state.displayStatus} />
            </div>
          </div>
        )}
        <div className='row legend'>
          <div className='col-md-12'>
              <p><span id='green'>Green:</span> space available <span id='red'>Red:</span> wait list <span id='darkRed'>Dark Red:</span> long wait list </p>
          </div>
        </div>
      </div>
    );
  }
}

class Map extends Component {
  constructor(props) {
  super(props) 
  this.state = {
    viewport: {
      width: 730,
      height: 400,
      latitude: 49.27,
      longitude: -123.116226,
      zoom: 10.4
    },
    popupInfo: null
  };
}

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapboxApiAccessToken={TOKEN}>
        <Marker
          className={ this.props.displayStatus }
          latitude={49.24}
          longitude={-123.11}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {" "}
          <CenterPinGreen size={22} />{" "}
        </Marker>
        <Marker
          latitude={49.21}
          longitude={-123.0}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {" "}
          <CenterPin size={22} />{" "}
        </Marker>
        <Marker
          latitude={49.22}
          longitude={-123.06}
          offsetLeft={-20}
          offsetTop={-10}
        >
          {" "}
          <CenterPinGreen size={22} />{" "}
        </Marker>
        <Marker
          latitude={49.25}
          longitude={-123.1}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPin size={22} />
        </Marker>
        <Marker
          latitude={49.22}
          longitude={-123.12}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPinDarkRed size={22} />
        </Marker>
        <Marker
          latitude={49.31}
          longitude={-123.0}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPinDarkRed size={22} />
        </Marker>
        <Marker
          latitude={49.29}
          longitude={-122.99}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPinDarkRed size={22} />
        </Marker>
        <Marker
          latitude={49.23}
          longitude={-123.21}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPin size={22} />
        </Marker>
        <Marker
          latitude={49.28}
          longitude={-123.12}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPin size={22} />
        </Marker>
        <Marker
          latitude={49.23}
          longitude={-123.11}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPin size={22} />
        </Marker>
        <Marker
          latitude={49.28}
          longitude={-123.12}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <CenterPin size={22} />
        </Marker>
      </ReactMapGL>
    );
  }
}

export default Home;
