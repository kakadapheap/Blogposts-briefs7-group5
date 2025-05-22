import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const handleFollow = () => {
    navigate('/');
  };

  return (
    <div className="p-20 w-auto flex px-24 justify-center relative">
      <div className="p-20 rounded-full sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
        <div className="mr-10">
          <img
            className="rounded-full min-w-[100px] w-full h-auto md:w-auto md:h-auto"
            src="https://ucarecdn.com/833d0fe1-c3b5-4843-b62c-fed9467aceeb/imageOfMyself.jpeg"
            alt="Aydin Vesali Moghaddam"
          />
        </div>
        <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h1 className="text-blue-800 font-bold text-3xl mt-6 mb-8">
              Hello Everyone!
          </h1>
          <p className="text-black w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
            We are developer at ISI Tech Solutions. we sre full-stack developer.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-4 mb-6">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href=""
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                width="20px"
                height="20px"
                alt="Github"
              />
              <span>Visit Github</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href=""
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                width="20px"
                height="20px"
                alt="LinkedIn"
              />
              <span>Follow on LinkedIn</span>
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href=""
              className="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white"
            >
              <img
                className="mr-2 hover:scale-105 transition duration-300 ease-in-out"
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                width="20px"
                height="20px"
                alt="Twitter"
              />
              <span>Follow on Twitter</span>
            </a>
          </div>

          <div className="w-full flex justify-start sm:justify-center md:justify-start mt-4">
            <button
              onClick={handleFollow}
              className="w-full sm:w-auto md:w-64 bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white font-semibold py-3 px-6 rounded-lg shadow-md text-center"
            >
              Back to Home
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
