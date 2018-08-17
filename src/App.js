import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap'
import './App.css';
import Trackhistory from './Trackhistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query:null,
      trackinfo: []
    }
  }
search() {
  // const FETCH_URL = 'https://davidwalsh.name/demo/arsenal.json';
  // const FETCH_URL = `https://www.pochta.ru/tracking?p_p_id=trackingPortlet_WAR_portalportlet&p_p_lifecycle=2&p_p_resource_id=getList&barcodeList=${this.state.query}`;
  const FETCH_URL = `https://cors.io/?https://www.pochta.ru/tracking?p_p_id=trackingPortlet_WAR_portalportlet&p_p_lifecycle=2&p_p_resource_id=getList&barcodeList=${this.state.query}`;
  // console.log("FETCH_URL:", FETCH_URL);
  fetch(FETCH_URL, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(json => {
    const trackinfo = json.list[0].trackingItem.trackingHistoryItemList;
    this.setState({trackinfo});
    // console.log(this.state.trackinfo);

  });

};

  render() {
    // console.log(this.state.query);
    return (
      <div className="App">
        <h1>Введите трек и нажмите кнопку</h1>
        <Form className="trackform">
          <FormControl
            onChange={event => {this.setState({query: event.target.value})}}
          />
          <Button className="trackinput" onClick={() => this.search()}>Отследить</Button>
        </Form>
        <Trackhistory
          trackinfo={this.state.trackinfo}
        />
        <p>Треки только почты РФ (например, CJ472809439US или LZ551260745US).</p>
        <p>Исходники (React): <a href="https://bitbucket.org/KovalevRoman/rupotr/src/master/">на BitBucket</a></p>
        <p>Лицензия: GNU GPL.</p>
      </div>
    );
  }
}

export default App;
