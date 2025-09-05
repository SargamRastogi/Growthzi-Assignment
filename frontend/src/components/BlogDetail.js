import React from "react";
import { useParams } from "react-router-dom";

const blogData = {
  1: {
    title: "Become a UX/UI Designer With Courses & Bootcamps",
    content: "Full blog content for UX/UI Designer..."
  },
  2: {
    title: "Top Best App Development For Your Business Plan",
    content: "Full blog content for App Development..."
  },
  3: {
    title: "The Best Portfolio For Agency Design & Training",
    content: "Full blog content for Portfolio..."
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) return <h2 style={{ padding: "40px" }}>Blog not found</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogDetail;
