import React from 'react';

class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: ""
    };
    this.changeValue = this.changeValue.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.displayNames = this.displayNames.bind(this);
  }

  updateValue(name) {
    this.setState({inputVal: name});
  }

  changeValue(event) {
    this.setState({ inputVal: event.target.value })
  }

  displayNames() {
    let names = this.props.myNames.map((name, idx) => {
      let name2 = name.toLowerCase();
      let inputVal = this.state.inputVal.toLowerCase();
      if (name2.startsWith( inputVal )){
        return <li key={name} onClick={(e) => {this.updateValue(name)} }> > {name}</li>
      } 
    })
    return names;
  }

  render() {
    return (
        <div className="autocomplete-widget widget-box flex">
            <h3> Shiba Autocomplete Widget </h3 >
            <div className="autocomplete">
              Search:  <input type="text" value={this.state.inputVal} onChange={ this.changeValue } ></input>
              <ul>
                { this.displayNames() }
              </ul>
            </div>
        </div>
    )}

}
export default Autocomplete;