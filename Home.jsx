import { useEffect, useState } from "react";
import api from "../services/api";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await api.get("/blogs");
      console.log(res.data);
      setBlogs(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Blog Website</h1>

      {blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h2>{blog.title}</h2>
            <h4>By {blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;