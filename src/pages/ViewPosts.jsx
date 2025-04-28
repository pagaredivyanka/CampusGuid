// pages/ViewPosts.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("experiences")) || [];
    setPosts(stored);
  }, []);

  return (
    <div className="posts-container">
      <h2>All Placement Experiences</h2>
      <div className="card-grid">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h3>{post.name}</h3>
            <p><strong>Branch:</strong> {post.branch}</p>
            <p><strong>Company:</strong> {post.company}</p>
            <p><strong>Role:</strong> {post.role}</p>
            <p><strong>Date:</strong> {post.experienceDate}</p>
            <Link to={`/viewposts/${post.id}`} className="button">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPosts;