// pages/ViewPostDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewPostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("experiences")) || [];
    const selectedPost = posts.find((p) => p.id === Number(id));
    if (!selectedPost) {
      alert("Post not found");
      navigate("/viewposts");
    } else {
      setPost(selectedPost);
    }
  }, [id, navigate]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-details">
      <h2>{post.name}'s Experience</h2>
      <p><strong>Branch:</strong> {post.branch}</p>
      <p><strong>Company:</strong> {post.company}</p>
      <p><strong>Role:</strong> {post.role}</p>
      <p><strong>Date:</strong> {post.experienceDate}</p>

      <h4>Selection Process</h4>
      <p>{post.selectionProcess}</p>

      <h4>Rounds</h4>
      <p>{post.rounds}</p>

      <h4>Preparation Strategy</h4>
      <p>{post.preparationStrategy}</p>

      <h4>Resources Used</h4>
      <p>{post.resources}</p>

      <h4>Tips for Juniors</h4>
      <p>{post.tips}</p>
    </div>
  );
};

export default ViewPostDetails;