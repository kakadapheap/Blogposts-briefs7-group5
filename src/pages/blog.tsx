function Blog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is the blog page where you can find all the latest posts.
      </p>
      <a
        href="blogdetail"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Read More
      </a>
    </div>
  );
}
export default Blog;
