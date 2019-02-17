import React from 'react';

const TabsContent = (props) => {
  
  return(
    <article>
      <p>{props.content[props.index].content}</p>
    </article>
  )
}

export default TabsContent;