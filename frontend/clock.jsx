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
    <div className="widget-box">
      <h3> Shiba Clock Widget</h3>
      <div className="clock flex">
        <div className="date flex">
            <div><strong>Date:</strong></div>
            <div>{dateString}</div>     
        </div>
        <div className="time flex">
            <div><strong>Time:</strong></div>
            <div>{timeString}</div>     
        </div> 
      </div>
    </div>
    )}

}


export default Clock;