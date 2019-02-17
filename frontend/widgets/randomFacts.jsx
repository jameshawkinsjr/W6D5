import React from 'react';

class RandomFacts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentStat: "Loading"
    };
    this.randomFact = this.randomFact.bind(this);
  }

  componentWillMount() {
    this.randomFact();
  }

  randomNum(){
    return Math.floor((Math.random() * this.props.facts.length-1) + 1);
  }

  randomFact() {
    this.setState( state => ({
      currentStat: this.props.facts[this.randomNum()]
    }));
  }

    render() {
      return(
          <div className="fact-widget widget-box">
            <h3> Shiba Fact Widget </h3>
            <article className="fact-widget-box flex">
                <button onClick={ this.randomFact }>Click here for a random fact!</button>
                <p>{this.state.currentStat}</p>
            </article>
          </div>
      )
    }



}

export default RandomFacts;