import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: ""
    };
  }

  render() {
    return (
        <div className="autocomplete-widget widget-box">
            <input type="text"></input>
            <ul>
                {this.props.myNames.map((name, idx) => {
                        return (
                            <li>{name}</li>
                )})}
            </ul>
        </div>
    )}

}


export default Autocomplete;