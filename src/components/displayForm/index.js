import React, { Component } from 'react';
import './index.css';

class DisplayForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.getEvents}>

        <div className="form-group">
          <label htmlFor="day">Day:</label>
          <input name="day" type="number" className="form-control" placeholder="Enter Day..." />
        </div>

        <div className="form-group">
          <label htmlFor="month">Month:</label>
          <input name="month" type="number" className="form-control" placeholder="Enter Month..." />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <input name="year" type="number" className="form-control" placeholder="Enter Year..." required />
        </div>

        <button type="submit" className="btn btn-primary">Get Events</button>
      </form>
    );
  }
}

export default DisplayForm;
