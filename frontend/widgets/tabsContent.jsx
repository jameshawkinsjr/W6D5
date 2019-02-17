import React from 'react';

const TabsContent = (props) => {
  
  return(
    <article>
      <p>{tabContent(props)}</p>
    </article>
  )
  
}

const tabContent = (props) => {
      // if (false) {
        console.log(props.content[props.index].content)
        // debugger
      if ( props.content[props.index].content instanceof Array) {
        let rand = Math.floor((Math.random() * props.content[props.index].content.length-1) + 1);
        return props.content[props.index].content[rand];
      } else {
        return props.content[props.index].content;
      }
    }
export default TabsContent;