import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Controls from './components/Controls';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: 300,
      interval: null,
      running: false,
    }
  }

  tick = () => {
    this.setState(state => ({ time: state.time - 1 }))
  }

  stopInterval = () => {
    clearInterval(this.state.interval)
    this.setState({interval: null})
  }

  start = () => {
    this.setState(state => ({
      running: true,
      interval: setInterval(this.tick, 1000),
      time: state.time > 0 ? state.time : 1500
    }))
  }

  reset = () => {
    this.stopInterval()
    this.setState(state => ({
      running: false,
      time: 300
    }))
  }

  pause = () => {
    this.state.interval ? this.stopInterval() : this.start();
  };

  getStatus = () => {
    const { time, running, interval } = this.state;
    if (time === 0) return 'Finished';
    if (running && !interval) return 'Paused';
    if (running) return 'Running';
  }

  getProgress = () => {
    const current = this.state.time;
    const total = 300;
    return ((total - current) / total) * 100;
  }

  render() {
    const { time } = this.state

    return (
      <div className="App">
        <Display
          time = {time}
          status = {this.getStatus()}
          progress = {this.getProgress()}
        />
        <Controls
          start = {this.start}
          reset = {this.reset}
          pause = {this.pause}
          status = {this.getStatus()}
        />
      </div>
    )
  }
}

export default App;
