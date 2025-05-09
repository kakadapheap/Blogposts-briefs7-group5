const Home: React.FC = () => {
  // Example blog post data
  const blogPosts = [
    {
      id: 1,
      title: "How to Grow a Tree",
      description:
        "Learn the basics of planting and growing healthy trees in your backyard.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Best Gardening Tools",
      description:
        "Here are the top tools every gardener should have in their shed.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Spring Planting Guide",
      description:
        "Follow this guide to get your garden ready for spring with the right seeds.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      title: "Soil Health Tips",
      description:
        "Discover simple ways to improve your soil for better plant growth.",
      image: "https://via.placeholder.com/150",
    },
  ];

  // function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
    //   <p className="text-lg text-gray-700 mb-8">
    //     This is a simple blog application built with React and Tailwind CSS.
    //   </p>
    //   <a
    //     href="/about"
    //     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    //   >
    //     Learn More
    //   </a>
    // </div>
    <div className="max-w-6xl mx-auto p-4">
      {/* Popular Categories */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-300 h-24 rounded" />
          <div className="bg-gray-300 h-24 rounded" />
          <div className="bg-gray-300 h-24 rounded" />
          <div className="bg-gray-300 h-24 rounded" />
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
        <div className="grid gap-6 md:grid-rows-2 lg:grid-cols-3 ">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400">
            ‹
          </button>
          <button className="w-8 h-8 bg-gray-300 rounded hover:bg-gray-400">
            ›
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
