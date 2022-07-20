
import React from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { getCustomerData } from '../../utils/Common';
import { /*getCustomer, */post, isAuthenticated } from '../../repository';
const LOCALSTORAGE_KEY = "customer";
// const BASKET = 'basket';

export default class Customer extends React.Component{
  constructor() {
    super();
    this.state = { 
      customer: '' 
    };
    this.state = getCustomerData();
  }
  
  componentDidMount() {
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.state));
  }

  logFields = () => {
    console.log('customer: ' + this.state);
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState({
       [name]: value,
    }, () => { this.logFields() });
    this.handleCounter();
    this.logFields();
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.state));
  }

  addCustomer(e) {
    e.preventDefault();
    let payload = localStorage.getItem(LOCALSTORAGE_KEY);
    console.log('payload: ' + payload);
    post(payload)
    .then(response => {
      return response.data
    })
    .catch(err => alert(err));
    window.location.reload(true);
  }

  render() {
    if (!isAuthenticated()) 
      return ( 
      <Redirect to = "/login" /> 
    );
    return (
      <div className="container">
      <hr/>
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Customer</h3>
            </div>
            <div className="panel-body">
              <form onSubmit={this.addCustomer}>
                <div className="form-group">
                  <label>Title:</label>
                  <input type="text" className="form-control" name="title"  defaultValue={this.state.customer.title}                 onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>First Name:</label>
                  <input type="text" className="form-control" name="firstName" defaultValue={this.state.customer.firstName} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input type = "text" className = "form-control" name = "lastName" defaultValue = {this.state.customer.lastName
                  } onChange = {this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Building Name:</label>
                  <input type="text" className="form-control" name="buildingName" defaultValue={this.state.customer.buildingName} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Flat Number:</label>
                  <input type="text" className="form-control" name="flatNumber" defaultValue={this.state.customer.flatNumber} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>House Number:</label>
                  <input type="text" className="form-control" name="houseNumber" defaultValue={this.state.customer.houseNumber} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Address Line 2:</label>
                  <input type="text" className="form-control" name="line2" defaultValue={this.state.customer.line2} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Address Line 4:</label>
                  <input type="text" className="form-control" name="line4" defaultValue={this.state.customer.line4} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Town:</label>
                  <input type="text" className="form-control" name="town" defaultValue={this.state.customer.town}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Post Code:</label>
                  <input type="text" className="form-control" name="postCode" defaultValue={this.state.customer.postCode} onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>County:</label>
                  <input type="text" className="form-control" name="County" defaultValue={this.state.customer.county}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input type="text" className="form-control" name="email" defaultValue={this.state.customer.email}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input type="text" className="form-control" name="phoneNumber" defaultValue={this.state.phone}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Date Of Birth:</label>
                  <input type="text" className="form-control" name="dateOfBirth" defaultValue={this.state.customer.dateOfBirth}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Dependents:</label>
                  <input type="text" className="form-control" name="dependents" defaultValue={this.state.customer.dependents}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Employment Status:</label>
                  <input type="text" className="form-control" name="employmentStatus" defaultValue={this.state.customer.employmentStatus}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Sort Code:</label>
                  <input type="text" className="form-control" name="sortCode" defaultValue={this.state.customer.sortCode}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Account Number:</label>
                  <input type="text" className="form-control" name="accountNumber" defaultValue={this.state.customer.accountNumber}  onChange={this.handleFormChange}/>
                </div>
                <div className="form-group">
                  <label>Gross Annual Income:</label>
                  <input type="text" className="form-control" name="grossAnnualIncome" defaultValue={this.state.customer.grossAnnualIncome}  onChange={this.handleFormChange}/>
                </div>

                
                <button type="submit" className="btn btn-success float-right" onSubmit={this.addCustomer} style={{ marginRight: "10px" }}>Save</button>

                <Link to="/"><button className="btn btn-danger float-right" style={{ marginRight: "10px" }}>Cancel</button></Link>
                <br/><br/><br/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}