import Card from "../components/card";
import backgroundVideo from "../assets/hero-section-vdo-bg.mp4";
import img1 from "../assets/card1.png";
import img2 from "../assets/card2.png";
import img3 from "../assets/card3.png";
import img4 from "../assets/card4.png";
import img5 from "../assets/card5.png";
import img6 from "../assets/card6.png";
import img7 from "../assets/card7.png";
import img8 from "../assets/card8.png";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import box4 from "../assets/box4.png";

const Home: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 lg:px-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            Where Words Come to Life <br />
            <span className="block text-blue-300">Inspire. Learn. Share.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 md:mb-8 max-w-3xl mx-auto animate-fadeInUp opacity-0 animate-delay-200">
            Welcome to your source of stories, knowledge, and fresh ideas —
            explore posts on tech, life, creativity, and more. <br />
            Dive in, find your spark, and share your voice with the world.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 animate-fadeInUp delay-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4">
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-300 h-24 rounded transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp">
              <img
                src={box1}
                alt="Category"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="bg-gray-300 h-24 rounded transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp">
              <img
                src={box2}
                alt="Category"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="bg-gray-300 h-24 rounded transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp">
              <img
                src={box3}
                alt="Category"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="bg-gray-300 h-24 rounded transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp">
              <img
                src={box4}
                alt="Category"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recent Blog Posts</h2>
          <div className="grid gap-6 md:grid-rows-2 lg:grid-cols-3 ">
            <Card
              image={img1}
              title="Chasing the Horizon"
              description="Discover the freedom and focus that comes with cycling through nature's most beautiful landscapes."
            />
            <Card
              image={img2}
              title="From Pan to Plate"
              description="Dive into the heart of a professional kitchen and learn how culinary magic is made."
            />
            <Card
              image={img3}
              title="The Art of Slowing Down"
              description="A reminder from nature's slowest creature: sometimes, taking it slow is the key to happiness."
            />
            <Card
              image={img4}
              title="Voices for Science"
              description="Explore the global movement advocating for truth, research, and the power of scientific voices."
            />
            <Card
              image={img5}
              title="Play Through the Pain"
              description="A story of resilience and mental strength in the world of competitive sports."
            />
            <Card
              image={img6}
              title=" A Starry Perspective"
              description="Step into Van Gogh’s visionary world and the emotional turbulence behind his masterpiece."
            />
            <Card
              image={img7}
              title="Coding the Future"
              description="Explore how lines of code shape the apps, games, and systems we use every day."
            />
            <Card
              image={img8}
              title="Worlds of Wonder"
              description=" Celebrate the creativity and joy of animated storytelling, from childhood favorites to modern classics."
            />
          </div>

          {/* <div className="flex justify-center mt-8 gap-4">
            <a
              href="/blog"
              className="inline-block bg-blue-600 text-white text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 animate-fadeInUp delay-300"
            >
              View All Posts
            </a>
            <a
              href="/about"
              className="inline-block bg-gray-300 text-gray-800 text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-md hover:bg-gray-400 transition transform hover:scale-105 animate-fadeInUp delay-300"
            >
              About Us
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Home;
