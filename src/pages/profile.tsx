import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const handleFollow = () => {
    navigate('/');
  };

  return (
    <div className="max-w-sm w-full mx-auto bg-white rounded-xl shadow-md sm:max-w-md md:max-w-lg lg:max-w-sm transition-all mt-[20px] mb-[20px]">
      
      <div
        className="h-32 sm:h-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>

      <div className="flex justify-center -mt-12 sm:-mt-16">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white"
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Profile"
        />
      </div>

      <div className="text-center mt-2 sm:mt-4 px-4">
        <h2 className="text-lg sm:text-xl font-semibold">Sarah Smith</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Freelance Web Designer
        </p>
      </div>

      <div className="flex justify-around mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 px-4">
        <div className="flex flex-col items-center">
          <span>⭐</span>
          <span>2k</span>
        </div>
        <div className="flex flex-col items-center">
          <span>👥</span>
          <span>10k</span>
        </div>
        <div className="flex flex-col items-center">
          <span>🎁</span>
          <span>15</span>
        </div>
      </div>

      <div className="text-center mt-4 mb-4 sm:mt-6 sm:mb-6">
        <button
          className="bg-blue-900 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full hover:bg-blue-800 transition-all"
          onClick={handleFollow}
        >
          Follow
        </button>
      </div>
    </div>
  );
}

export default Profile;
