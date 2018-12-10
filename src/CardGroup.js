import React from 'react';

// CardGroup Component
const CardGroup = (props) => {
  const itemList = props.list;
  return(
    <div className="section container">
      <div className="row">
        {itemList.map(item => {
          return (
          <Card title={item.name} key={item.id} stock={item.stock} />
          )
        })}
      </div>
    </div>
  )
}

export default CardGroup;