import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeHeight = this.onChangeHeight.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      gender: 'm',
      age: 0,
      weight: 0,
      height: 0
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
        gender: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
        age: e.target.value
    })
  }

  onChangeWeight(e) {
    this.setState({
        weight: e.target.value
    })
  }

  onChangeHeight(e) {
    this.setState({
        height: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
        username: '',
        gender: 'm',
        age: 0,
        weight: 0,
        height: 0
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group"> 
            <label>Gender: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.gender}
                onChange={this.onChangeGender}>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="o">Others</option>            
            </select>
          </div>
          <div className="form-group"> 
            <label>Age: </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.age}
                onChange={this.onChangeAge}
                />
          </div>
          <div className="form-group"> 
            <label>Weight (in kgs): </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.weight}
                onChange={this.onChangeWeight}
                />
          </div>
          <div className="form-group"> 
            <label>Height(in cm): </label>
            <input  type="number"
                required
                className="form-control"
                value={this.state.height}
                onChange={this.onChangeHeight}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}