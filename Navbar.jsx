import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">
          My Blog
        </h1>

        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Create Blog
        </button>
      </div>
    </nav>
  );
}

export default Navbar;