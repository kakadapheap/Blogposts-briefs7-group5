import MyImage from "../assets/world-about.png";
const About = () => {
  return (
    <div>
      <div className="flex flex-col  items-center  ">
        <p className=" font-bold mt-10 bg-pink-400 rounded-full p-4 text-black">
          About Us
        </p>
        <h1 className="text-6xl text-black text-center mt-6 font-bold">
          The world’s destination <br /> for design.
        </h1>
        <p className="text-lg text-gray-700 mt-4 text-center">
          We're on a mission to help professional designers earn a living doing
          work they take pride in.
        </p>
        <div>
          <img
            src="https://framerusercontent.com/images/l7zkKnvYVjJN3GMpaepXk4PFoiY.jpg?scale-down-to=2048"
            alt="About Us"
            className="w-full h-96 object-cover mt-12 rounded-lg shadow-lg "
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 px-4 gap-6">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold">
            We’re a small team of designers, developers, and writers who are
            passionate about building a better web.
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mt-4">
            We’re a small team of designers, developers, and writers who are
            passionate about building a better web. We believe that the web is a
            powerful tool for communication and collaboration, and we’re
            committed to making it a better place for everyone. We’re constantly
            exploring new ideas and technologies, and we’re always looking for
            ways to improve our products and services. We’re dedicated to
            providing our users with the best possible experience, and we’re
            always open to feedback and suggestions. If you have any questions
            or comments, please don’t hesitate to reach out to us. We would love
            to hear from you!
          </p>
        </div>

        <div className="w-full max-w-sm text-center bg-white rounded-2xl shadow-lg p-6 space-y-14">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl text-black">2009</h1>
            <small>Founded</small>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl text-black">100%</h1>
            <small>Remote</small>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl text-black">17</h1>
            <small>Humans</small>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <img
          src={MyImage}
          alt="About Us"
          className="w-48 h-48 containn:size layout paint cursor:auto user -select:none"
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold ">
          Join our team
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-4 text-center">
          Since we are a 100% distributed team, you can work from anywhere. No
          need to move for a <br /> job. We are proud of a culture of
          communication, collaboration, trust and kindness.
        </p>
      </div>
    </div>
  );
};

export default About;
