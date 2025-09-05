import React from "react";
import "../styles/Blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { id: 1, title: "Become a UX/UI Designer With Courses & Bootcamps", date: "20 May 2022", img: "/pr1.jpg" },
    { id: 2, title: "Top Best App Development For Your Business Plan", date: "18 Sept 2024", img: "/pr2.jpg" },
    { id: 3, title: "The Best Portfolio For Agency Design & Training", date: "21 March 2025", img: "/pr3.jpg" }
  ];

  return (
    <section className="blog">
      <div className="section-heading-container">
        <div className="section-heading">
          <div className="circle-icon"></div>
          <h3>Latest Blog</h3>
        </div>
      </div>

      <div className="blog-grid">
        {posts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.img} alt={post.title} className="blog-img" />
            <p className="date">{post.date}</p>
            <h4>{post.title}</h4>
            <Link to={`/blog/${post.id}`}>Read More →</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
