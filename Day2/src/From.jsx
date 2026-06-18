import React, { useState } from 'react';

const From = () => {
  const [name, setName] = useState("");

  const handelChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <div>From</div>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={handelChange}
      />

      <h2>{name}</h2>
    </>
  );
};

export default From;