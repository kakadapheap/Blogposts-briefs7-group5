interface CardProps {
  image: string;
  title: string;
  description: string;
}

function Card({ image, title, description }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 max-w-md w-full mx-auto transform transition duration-500 ease-in-out hover:scale-105 animate-fadeInUp">
      <img
        src={image}
        alt="Card"
        className="w-full h-60 object-cover rounded-xl"
      />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default Card;
