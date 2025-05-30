// src/pages/CategoryBlog.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "../components/Category";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
}

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
