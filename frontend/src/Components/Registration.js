import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Registration extends Component {
  constructor(){
    super() 
      this.state = {
        CentersList: [],
        center_name:'',
        id: 0,
        value: '',
        displayStatus: 'd-none',
        child: {
          childName: '',
          childAge: ''
        }
      }
      this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    axios.get('http://localhost:8080/register')
    .then((response) => {
      this.setState({
        CentersList:response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
      id: Number(e.target.value)
    });
  }

  addChildInfo = (e) => {
    this.setState({ 
      child: {
        ...this.state.child,
        childName: e.target.value,
        childAge: e.target.value
  }
    })
    localStorage.setItem('child', JSON.stringify(this.state.child))
    
  }

  changeDisplay = (e) => {
    e.preventDefault()
    this.setState({
      displayStatus: 'animated bounceInUp'
    })
  }


  render() {
    return (
          <div className='container main'>
          <div className='row justify-content-end'>
          <div className='col-md-3'><button type="button" className="btn btn-primary"><Link id='link' to='/register'>Welcome Family Member User</Link></button></div>
          </div><br />
          <div className='row'>
          <div className='col-md-4 shadow-lg p-3 mb-5 bg-white rounded form-group'>
            <h4>Enter information about your child</h4>
            <div className="input-group input-group-sm mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
             </div>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.addChildInfo} />
            </div>
            <div className="input-group input-group-sm mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
             </div>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={this.addChildInfo}/>
            </div>
            <div className="input-group input-group-sm mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Type</span>
             </div>
             <select className="form-control">
              <option>Part-time</option>
              <option>Full-time</option>
            </select>
            </div>
            <div className="input-group input-group-sm mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Start date</span>
             </div>
              <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div className="input-group input-group-sm mb-3">
             <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Special Needs</span>
             </div>
             <select className="form-control">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            </div>

            <br />
              <button type = 'button' className="btn btn-secondary" onClick={this.changeDisplay} >Enroll me!</button>
              <h4 id='congratulationMessage' className={this.state.displayStatus}>Congratulations! You was successfully enrolled into the queue. Your number is: 267</h4>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-6'>
            <h4>Choose Kindergarten from the list:</h4>
            {this.state.CentersList.length > 0 &&
            <div>
              <div className="input-group  mb-3">
              <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                  <option value='0'>3544 West 1st Avenue</option>
                  <option value='1'>1 Kingsway</option>
                  <option value='2'>4595 West 8th Avenue</option>
                  <option value='3'>7715 Muirfield Drive</option>
                  <option value='4'>3455 West King Edward Ave</option>
                  <option value='5'>2815 Revelstoke Court</option>
                  <option value='6'>4474 Rupert Street</option>
                  <option value='7'>401-345 Robson Street</option>
                  <option value='8'>1859 West 15th Avenue</option>
                  <option value='9'>3575 Kaslo Street</option>
              </select>
              </div>
              <br /> 
              <div>
              <table className="table table-bordered">
                <caption>Basic Information about Child Care Center</caption>
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
                    <td>{this.state.CentersList[this.state.id].center_name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Type</th>
                    <td>{this.state.CentersList[this.state.id].type}</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td>{this.state.CentersList[this.state.id].neighbourhood}</td>
                  </tr>
                  <tr>
                    <th scope="row">Contacts</th>
                    <td>{this.state.CentersList[this.state.id].contacts}</td>
                  </tr>
                </tbody>
              </table>
              </div> 
            </div>}
            
            
            <h3>Already registered? Click <Link to='/queue'>here</Link> to see queue.</h3>
              </div>
            </div>
            </div>
             
    )
  }}

export default Registration;