import React from 'react';

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: new Date().toLocaleString() };
    }

    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: new Date().toLocaleString() }), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
        let time = (this.state.time).split(' ')[1];

      return (
        <p className="App-clock">
        La hora es {time}.
      </p>
      );
    }
  }

export default Timer;