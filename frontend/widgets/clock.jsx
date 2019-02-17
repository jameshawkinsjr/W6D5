import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
    this.intervalId = "";
  }
  
  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    this.intervalId = "";
  }

  render() {
    let dateString = this.state.time.toDateString();
    let timeString = this.state.time.toLocaleTimeString();
    return (
      <div className="clock flex">
        <div className="date flex">
            <div><span>{dateString}</span></div>     
        </div>
        <div className="time flex">
            <div><span>{timeString}</span></div>     
        </div> 
      </div>
    )}

}


export default Clock;