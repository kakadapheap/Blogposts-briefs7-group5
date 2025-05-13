import { useNavigate } from "react-router-dom";

export default function BlogPostDetail() {
  // Example blog data (replace with API data)
  const blog = {
    title: "How to Cook Like a Greek",
    imageUrl: "https://source.unsplash.com/random/900x500?greek-food",
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

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-500 hover:underline"
      >
        ← Back to blog
      </button>
      <img
        src={blog.imageUrl}
        alt={blog.title}
        className="w-[500px] h-70 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6 text-gray-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 mt-1">
        By {blog.author} • {blog.date}
      </p>
      <div className="mt-4 text-gray-700 whitespace-pre-line">
        {blog.content}
      </div>
      <div className="mt-6 flex gap-3">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
