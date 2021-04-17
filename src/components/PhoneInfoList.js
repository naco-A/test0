import React from 'react';
import PhoneInfo from './PhoneInfo';

const PhoneInfoList = ({data}) => {
  const list = data.map(info => (<PhoneInfo info={info} key={info.id}></PhoneInfo>))
  return (
    <div>
      {list}
    </div>
  );
};

export default PhoneInfoList;