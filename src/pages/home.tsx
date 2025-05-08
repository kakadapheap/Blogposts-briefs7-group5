function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg text-gray-700 mb-8">
        This is a simple blog application built with React and Tailwind CSS.
      </p>
      <a
        href="/about"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Learn More
      </a>
    </div>
  );
}
export default Home;
