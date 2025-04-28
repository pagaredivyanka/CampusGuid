// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostExperience from "./pages/PostExperience";
import ViewPosts from "./pages/ViewPosts";
import ViewPostDetails from "./pages/ViewPostDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>CampusGuid</h1>
          <div>
            <Link to="/login" className="button">Log in</Link>
            <Link to="/register" className="button" style={{ marginLeft: '10px' }}>Register</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<PostExperience />} />
          <Route path="/posts" element={<ViewPosts />} />
          <Route path="/viewposts/:id" element={<ViewPostDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;