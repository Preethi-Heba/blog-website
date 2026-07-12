import React from "react";

function BlogCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-2">
        Blog Title
      </h2>

      <p className="text-gray-600 mb-4">
        This is a sample blog description.
      </p>

      <div className="flex gap-3">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Edit
        </button>

        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
}

export default BlogCard;