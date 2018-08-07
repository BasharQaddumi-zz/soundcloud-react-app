import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    url:"",
    url2:""
  }
  onGetHandler () {
    const url = this.state.url2;
    this.setState({url:url});
  }
  onValueChangedHandler = (e) => {
        this.setState({url2: e.target.value});
    }
  render() {
    return (
      <div className="App">
              <input placeholder="Enter URL" onChange={(e) => this.onValueChangedHandler(e)}/>
              <button className="button" onClick={this.onGetHandler.bind(this)}>Get</button>
               <iframe title="soundcloud" width="100%" height="166" scrolling="no"
                     src={"https://w.soundcloud.com/player/?url="+this.state.url}>
                </iframe>
      </div>
    );
  }
}

export default App;
