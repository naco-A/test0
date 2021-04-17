import React from 'react';

const PhoneInfo = ({info:{id, name, phone}}) => {
  const style = {
    border: '1px solid black',
    padding: '8px',
    margin: '8px'
  }
  return (
    <div style={style}>
      <div><b>{name}</b></div>
      <div>{phone}</div>
    </div>
  );
};

export default PhoneInfo;