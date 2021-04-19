import React, { Component } from 'react';
import axios from 'axios';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeExercisename = this.onChangeExercisename.bind(this);
    this.onChangeProgName = this.onChangeProgName.bind(this);
    this.onChangeProgRank = this.onChangeProgRank.bind(this);
    this.onChangeDiscription = this.onChangeDiscription.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        exercisename: '',
        progname: '',
        progrank: 0,
        discription: '',
        type: 'Strength'
    }
  }

  onChangeExercisename(e) {
    this.setState({
        exercisename: e.target.value
    });
  }

  onChangeProgName(e) {
    this.setState({
        progname: e.target.value
    });
  }

  onChangeProgRank(e) {
    this.setState({
        progrank: e.target.value
    });
  }

  onChangeDiscription(e) {
    this.setState({
        discription: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
        type: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const exercise = {
      exercisename: this.state.exercisename,
      progname: this.state.progname,
      progrank: this.state.progrank,
      discription: this.state.discription,
      type: this.state.type
    };
  
    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

    this.setState({
        exercisename: '',
        progname: '',
        progrank: 0,
        discription: '',
        type: 'Strength'
    })
    
    window.location = '/exercise';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Exercise Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.exercisename}
                onChange={this.onChangeExercisename}
                />
          </div>
          <div className="form-group"> 
            <label>Progression Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.progname}
                onChange={this.onChangeProgName}
                />
          </div>
          <div className="form-group">
            <label>Progression Rank: </label>
            <input 
                type="number" 
                className="form-control"
                value={this.state.progrank}
                onChange={this.onChangeProgRank}
                />
          </div>
          <div className="form-group">
            <label>Discription: </label>
            <input 
                type="textarea" 
                className="form-control"
                value={this.state.discription}
                onChange={this.onChangeDiscription}
                />
          </div>
          <div className="form-group">
            <label>Type: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.type}
                onChange={this.onChangeType}>
                    <option value="Strength">Strength</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Mobility">Mobility</option>
                    <option value="Others">Others</option>  
            </select>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}