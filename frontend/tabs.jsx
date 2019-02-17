import React from 'react';
import TabsContent from './tabsContent';

class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tabIndex: 0,
      tabContent: "Test"
    };
  }

  handleClick(idx) {
    this.setState( state => ({
      tabIndex: idx
    }))
  }

  activeHeader(idx){
    if (this.state.tabIndex === idx){
      return "tab-active";
    }
    return "";
  }
    render() {
      return(
          <div className="tabs-widget widget-box">
            <h3> Shiba Tab Widget</h3>
            <div className="tab-headers-index flex">
                {this.props.myTabs.map((title, idx) => {
                  let index = idx;
                  return (
                  <div 
                    id={this.activeHeader(index)}
                    className="tab-headers" 
                    onClick={(e) => {this.handleClick(index)}}
                    key={title.title}>
                      <h3>
                      {title.title}
                      </h3>
                  </div>
                  )
                })}
            </div>
          <TabsContent index = {this.state.tabIndex} content = { this.props.myTabs } />
          </div>
      )
    }
}

export default Tabs;


