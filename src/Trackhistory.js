import React, { Component } from 'react';
import './App.css';


class Trackhistory extends Component {


  render() {
    let trackinfo = this.props.trackinfo;
    // console.log("trackinfo date", trackinfo[0].date);
    var date = new Date(this.props.date);
    return (
      <div className="track">

        <table className="table table-hover table-bordered ">
          <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Место</th>
              <th scope="col">Статус</th>
            </tr>
          </thead>
          <tbody>
          {
            trackinfo.map((item, k) => {
              return (
                <tr scope="row" className="trackitem">
                  <td key='{k}0'>{item.date.slice(0, -13).replace("T", " ")} </td>
                  <td key='{k}1'>{item.countryName} {item.cityName}</td>
                  <td key='{k}3'>{item.humanStatus}</td>
                </tr>
              )})
          }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Trackhistory;
