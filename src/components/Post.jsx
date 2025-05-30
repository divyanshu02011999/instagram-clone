import React, { useState } from 'react';

function Post({ image, username, description }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="bg-white border rounded-lg shadow-md max-w-md mx-auto mb-6">
      <div className="flex items-center p-4">
        <img
          src="https://picsum.photos/600/400"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <h3 className="ml-2 text-sm font-semibold">{username}</h3>
      </div>
      <img src={image} alt="Post" className="w-full h-64 object-cover" />
      <div className="p-4">
        <button
          onClick={handleLike}
          className="text-red-500 font-semibold"
        >
          ❤️ {likes} Likes
        </button>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export default Post;
