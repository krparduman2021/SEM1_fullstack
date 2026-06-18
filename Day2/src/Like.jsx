import React, { useState } from 'react';

const Like = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "😁 Smile" : "🫡 Roger That"}
      </button>
    </div>
  );
};

export default Like;