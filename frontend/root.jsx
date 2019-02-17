import React from 'react';
import Clock from './clock';
import ClockPicture from './clockPicture';
import Happy from './happy';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Root extends React.Component {
  render() {
    return (
      <div>
        <div id="shiba-sun">
          <img src="../frontend/shiba.png"></img>
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
    "The Japanese have 3 words to describe Shibas: kan-i, ryosei, soboku"
  ]

let tabs = [
    { title: "Facts", content: shibaFacts },
    { title: "Bloodlines", content: "San In Shiba, the Mino Shiba, and the Shiba Shu Shiba" },
    { title: "Names", content: "Most popular names: Aiko, Akira, Emiko" }
  ]

let names = [ '1','2','3','4','5','6']

  

export default Root;