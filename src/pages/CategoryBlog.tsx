// src/pages/CategoryBlog.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import type { FC } from "react"; 

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
}

interface CategoryProps {
  selected: string;
}

const categories = ["all", "tech", "health", "lifestyle", "sports"];

const Category: FC<CategoryProps> = ({ selected }) => {
  const navigate = useNavigate();

  const handleClick = (cat: string) => {
    navigate(cat === "all" ? "/category-blog" : `/category-blog/${cat}`);
  };

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleClick(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

const CategoryBlog = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const currentCategory = category || "all";

  const fetchPosts = async (category: string) => {
    setLoading(true);
    try {
      const baseUrl = `http://localhost:1338/api/posts?populate=*`;
      const filter =
        category !== "all" ? `&filters[category][name][$eq]=${category}` : "";
      const response = await axios.get<{ data: BlogPost[] }>(
        `${baseUrl}${filter}`
      );
      setPosts(response.data.data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentCategory);
  }, [currentCategory]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Posts by Category</h1>
      <Category selected={currentCategory} />

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {posts.length === 0 ? (
            <p className="text-gray-500">No posts found.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryBlog;
