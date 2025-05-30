import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <div className="space-y-4">
      <Post
        username="john_doe"
        image="https://picsum.photos/600/400"
        description="Enjoying a beautiful day at the beach!"
      />
      <Post
        username="jane_smith"
        image="https://picsum.photos/600/400"
        description="Just finished a workout 💪"
      />
    </div>
  );
}

export default Feed;
