import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import Controls from './components/Controls';
import TypeList from './components/TypeList'


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedType: props.types[0],
            time: props.types[0].time,
            interval: null,
            running: false,
            sound: true
        }
    }

    static defaultProps = {
        types: [
            { name: 'Pomodoro', time: 1500 },
            { name: 'Short Break', time: 300 },
            { name: 'Long Break', time: 600 }
        ]
    }

    componentDidMount() {
        this.sound = new Audio('bell.flac');
        this.sound.preload = 'auto';
    }

    changeType = type => {
        this.reset();
        this.setState({ selectedType: type, time: type.time, running: false });
    }

    tick = () => {
        if (this.state.time <= 1) {
            this.stopInterval();
            this.setState({ running: false });
            if (this.state.sound) this.sound.play()
        }
        this.setState(state => ({ time: state.time - 1 }))
    }

    stopInterval = () => {
        clearInterval(this.state.interval)
        this.setState({ interval: null })
    }

    start = () => {
        this.setState(state => ({
            running: true,
            interval: setInterval(this.tick, 1000),
            time: state.time > 0 ? state.time : state.selectedType.time
        }))
    }

    reset = () => {
        this.stopInterval()
        this.setState(state => ({
            running: false,
            time: state.selectedType.time
        }))
    }

    pause = () => {
        this.state.interval ? this.stopInterval() : this.start();
    };

    restart = () => {
        this.changeType(this.props.types[0])
        this.setState(state => ({
            running: true,
            interval: setInterval(this.tick, 1000),
            time: state.time > 0 ? state.time : state.selectedType.time
        }))
    }

    getStatus = () => {
        const { time, running, interval } = this.state;
        if (time === 0) return 'Finished';
        if (running && !interval) return 'Paused';
        if (running) return 'Running';
    }

    getProgress = () => {
        const current = this.state.time;
        const total = this.state.selectedType.time;
        return ((total - current) / total) * 100;
    }

    render() {
        const { time, selectedType } = this.state
        const { types } = this.props

        return (
            <div className="App">

                <TypeList
                    types={types}
                    selected={selectedType}
                    changeType={this.changeType}
                />

                <Display
                    time={time}
                    status={this.getStatus()}
                    progress={this.getProgress()}
                    selected={selectedType}
                />

                <Controls
                    start={this.start}
                    reset={this.reset}
                    pause={this.pause}
                    restart={this.restart}
                    status={this.getStatus()}
                />
            </div>
        )
    }
}

export default App;
