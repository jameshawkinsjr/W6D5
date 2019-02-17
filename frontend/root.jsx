import React from 'react';
import Clock from './widgets/clock';
import ClockPicture from './widgets/clockPicture';
import Happy from './widgets/happy';
import Tabs from './widgets/tabs';
import RandomFacts from './widgets/randomFacts';
import Weather from './widgets/weather';
import Autocomplete from './widgets/autocomplete';

class Root extends React.Component {
  render() {
    return (
      <div>
        <div id="shiba-sun">
          <img src="../frontend/assets/imgs/shiba.png"></img>
        </div>
        <div className="header">
          <h1>My Awesome Widgets</h1>
          <Clock />
        </div>
        <div className='empty-header'></div>
        <div className="main flex">
            <div className="widgets flex">
              <Autocomplete myNames={names}/>
              <Tabs myTabs={tabs}/>
              <RandomFacts facts={shibaFacts}/>
              <Weather />
              <Happy />
            </div>
        </div>
      </div>
    )}
}


let shibaFacts = [
    'They were bred to be versatile hunters.',
    "`Shiba Inu` means `brushwood dog`",
    "The Shiba is the smallest of the six original Japanese dogs",
    "Shibas are the number one companion dog in Japan",
    "The first Shiba arrived in the United States in 1954",
    "Shibas are the 46th most popular dog in America",
    "The Japanese have 3 words to describe Shibas: kan-i, ryosei, soboku",
    "Archeologists have found dogs about the size of Shibas in sites from 14,500 B.C. to 300 A.D."
  ]

let tabs = [
    { title: "Bloodlines", content: "San In Shiba, the Mino Shiba, and the Shiba Shu Shiba" },
    { title: "Names", content: "Most popular names: Aiko, Akira, Emiko" }
  ]

let names = [ 'Alex','James','Dima','Shroder','Birju','Gary']

  

export default Root;