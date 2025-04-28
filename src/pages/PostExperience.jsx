// pages/PostExperience.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostExperience = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    company: "",
    role: "",
    selectionProcess: "",
    rounds: "",
    preparationStrategy: "",
    resources: "",
    tips: "",
    experienceDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPosts = JSON.parse(localStorage.getItem("experiences")) || [];
    const newPost = { ...formData, id: Date.now() };
    localStorage.setItem("experiences", JSON.stringify([newPost, ...storedPosts]));
    alert("Your experience has been submitted successfully!");
    navigate("/viewPosts");
  };

  return (
    <div className="form-container">
      <h2>Post Your Placement Experience</h2>
      <form onSubmit={handleSubmit}>
        <h4>Personal Info</h4>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />

        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="">Select Branch</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Computer Engineering">Artificial Intelligence and Data Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics and Telecommunication">Electronics and Telecommunication</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>

        <h4>Company Details</h4>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="input"
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role (e.g. SDE Intern)"
          value={formData.role}
          onChange={handleChange}
          className="input"
          required
        />

        <h4>Interview Details</h4>
        <textarea
          name="selectionProcess"
          placeholder="Describe the selection process..."
          value={formData.selectionProcess}
          onChange={handleChange}
          className="textarea"
          required
        />
        <textarea
          name="rounds"
          placeholder="Mention rounds and questions asked..."
          value={formData.rounds}
          onChange={handleChange}
          className="textarea"
          required
        />

        <h4>Preparation Strategy</h4>
        <textarea
          name="preparationStrategy"
          placeholder="How did you prepare for the interview?"
          value={formData.preparationStrategy}
          onChange={handleChange}
          className="textarea"
        />

        <h4>Resources Used</h4>
        <textarea
          name="resources"
          placeholder="Mention books, platforms, etc."
          value={formData.resources}
          onChange={handleChange}
          className="textarea"
        />

        <h4>Tips for Juniors</h4>
        <textarea
          name="tips"
          placeholder="Tips or suggestions..."
          value={formData.tips}
          onChange={handleChange}
          className="textarea"
        />

        <input
          type="date"
          name="experienceDate"
          value={formData.experienceDate}
          onChange={handleChange}
          className="input"
          required
        />

        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default PostExperience;
