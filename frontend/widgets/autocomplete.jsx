import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: ""
    };
  }

  updateValue(name) {
    this.setState({inputVal: name});
  }

  displayNames() {
    return (
    this.props.myNames.map((name, idx) => {
      return (
          <li id={name} onClick={(e) => {this.updateValue(name)} }>{name}</li>
      )
    })
    )
  }

  render() {
    return (
        <div className="autocomplete-widget widget-box flex">
            <h3> Shiba Autocomplete Widget </h3 >
            <input type="text" value={this.state.inputVal}></input>
            <ul>
              { this.displayNames }
            </ul>
        </div>
    )}

}
export default Autocomplete;