import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BlogPostDetail() {
  const blog = {
    title: "How to Cook Like a Greek",
    imageUrl:
      "https://img.freepik.com/premium-photo/asian-woman-food-blogger-cooking-salad-front-smartphone-camera-while-recording-vlog-video-live-streaming-home-kitchen_74952-1868.jpg",
    content: `
      Greek cuisine is all about fresh ingredients and bold flavors.
      In this post, we’ll explore how to make classic Greek dishes such as moussaka,
      souvlaki, and spanakopita. You'll learn what herbs and spices define the Mediterranean
      palate, and how to bring that to your kitchen.
    `,
    author: "John Papadakis",
    date: "May 9, 2025",
  };

  const navigate = useNavigate();

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments((prev) => [...prev, comment.trim()]);
      setComment("");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-gray-200 rounded-2xl shadow-lg mt-20 my-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-500 hover:underline"
      >
        ← Back to blog
      </button>

      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-full h-auto max-h-[400px] object-cover rounded-lg"
      />

      <h1 className="text-2xl sm:text-3xl font-bold mt-6 text-gray-800">
        {blog.title}
      </h1>
      <p className="text-sm text-gray-500 mt-1">
        By {blog.author} • {blog.date}
      </p>

      <div className="mt-4 text-gray-700 whitespace-pre-line">
        {blog.content}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete
        </button>
      </div>

      {/* Like Button */}
      <div className="mt-6 flex items-center gap-2">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded text-white ${
            liked ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          {liked ? "Liked" : "Like"}
        </button>
        <span className="text-gray-700">
          {likes} {likes === 1 ? "like" : "likes"}
        </span>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Comments</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Post
          </button>
        </div>
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((c, i) => (
              <li key={i} className="bg-white p-2 rounded shadow">
                {c}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
}
