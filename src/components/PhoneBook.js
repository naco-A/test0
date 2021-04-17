import React, { useState } from 'react';
//PhoneBook comments
const NAME = 'Name';
const PHONE = 'Phone';

const PhoneBook = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const fns = {[NAME] : setName, [PHONE] : setPhone};

  // const handleChange = (e) => e.target.name === NAME? setName(e.target.value) : e.target.name === PHONE ? setPhone(e.target.value) : console.log('err');
  const handleChange = (e) => fns[e.target.name] ? fns[e.target.name](e.target.value) : console.log('error');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCreate({name, phone});
    setName('');
    setPhone('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name={NAME}
        placeholder="name" 
        onChange={handleChange} 
        value={name}
      />
      <input 
        name={PHONE}
        placeholder="tel"
        onChange={handleChange} 
        value={phone}
      />
      <button type="submit">register</button>
    </form>
  );
};

export default PhoneBook;