// pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("experiences")) || [];
    setRecentPosts(stored);
    setFilteredPosts(stored); // Initially show all posts
  }, []);

  // Filter posts based on the search query
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query) {
      const filtered = recentPosts.filter(post =>
        post.company.toLowerCase().includes(query.toLowerCase()) // Case insensitive search
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(recentPosts); // Reset to all posts if search is empty
    }
  };

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIdx = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIdx, startIdx + postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="home">
      <p className="intro">For 4th-year students to post experience</p>
      <div className="button-group">
        <Link to="/post" className="button">Post Experience</Link>
        <Link to="/posts" className="button">View Posts</Link>
      </div>

      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by company"
          className="input"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="button">Filter</button>
      </div>

      <h2>Recent Posts</h2>
      <div className="post-grid">
        {currentPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.company}</h3>
            <p>{post.role}</p>
            <p className="details">{post.selectionProcess.slice(0, 100)}...</p>
            <p className="tips">{post.tips.slice(0, 50)}...</p>
            <div className="post-meta">
              <span>Date: {post.experienceDate}</span>
              <Link to={`/viewposts/${post.id}`} className="button">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className="button" onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className="button" onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
