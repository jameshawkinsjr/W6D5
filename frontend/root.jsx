import React from 'react';
import Clock from './clock';
import ClockPicture from './clockPicture';
import Happy from './happy';
import Tabs from './tabs';
import Weather from './weather';

class Root extends React.Component {
  render() {
    return (
      <div>
      <div id="shiba-sun">
        <img src="../frontend/shiba.png" width='100px'></img>
        </div>
        <div className="main flex">
            <h1 className="header">My <span>Awesome</span> Widget Webpage</h1>
            <div className="widgets flex">
              <Clock />
              <Tabs myTabs={tabs}/>
              <Weather />
              <Happy />
            </div>
      </div>
      </div>
    )}
}



let tabs = [
    { title: "Parents", content: "jana & ned" },
    { title: "Children", content: "sally & timmy & billy" },
    { title: "Dogs", content: "bill" }
  ];

  

export default Root;