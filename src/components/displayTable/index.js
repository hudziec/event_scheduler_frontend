import React, { Component } from 'react';
import './index.css';

class DisplayTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Delete Event</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.events[0] &&
              this.props.events.map( event =>
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.month + '/' + event.day + '/' + event.year}</td>
                  <td>{event.notes}</td>
                  <td>
                    <button onClick={() => this.props.deleteEvent(event.id)} className="btn btn-danger">Delete Event</button>
                  </td>
                </tr>
              )
          }
        </tbody>
      </table>
    );
  }
}

export default DisplayTable;
