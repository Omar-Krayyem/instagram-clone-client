import React, { useState } from "react";
import Post from "../post/post";
// import Suggestions from "../suggestion/suggestion";
import "../timeline/timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      likes: 54,
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;