import PhoneBook from './components/PhoneBook';
import './Twowin.css';
import { useState } from 'react';
import PhoneInfoList from './components/PhoneInfoList';

let id = 0;
function Twowin() {
  const [info, setInfo] = useState([]);
  const handleCreate = (data) => setInfo(info.concat({id: id++, ...data}));
  return (
    <div className="Twowin">
      <PhoneBook onCreate={handleCreate}/>
      <PhoneInfoList data={info}></PhoneInfoList>
    </div>
  );
}

export default Twowin;
