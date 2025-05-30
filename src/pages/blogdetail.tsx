import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BlogPostDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); // hook to navigate programmatically

  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1338/api/blogs/${id}?populate=*`)
      .then((res) => {
        setBlog(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
      });
  }, [id]);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <button
        onClick={() => navigate("/")}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-gray-600 transition"
      >
        ← Back 
      </button>

      <img src={blog?.image?.[0]?.url} alt="this is image" className="mb-4" />
      
      <div className="text-amber-500 text-2xl font-bold">
        {blog?.title}
      </div>
      
      <div className="mt-5 space-y-4 text-gray-700 indent-8 leading-relaxed font-semibold text-lg">
        {blog?.content}
      </div>
    </div>
  );
}
