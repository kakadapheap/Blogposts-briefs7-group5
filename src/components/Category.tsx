import type { FC } from "react";
import { useNavigate } from "react-router-dom";

interface CategoryProps {
  selected: string;
}

const categories = ["all", "tech", "health", "lifestyle", "sports"];

const Category: FC<CategoryProps> = ({ selected }) => {
  const navigate = useNavigate();

  const handleClick = (cat: string) => {
    navigate(cat === "all" ? "/category-blog" : `/category-blog/${cat}`);
  };

  return (
    <div className="flex gap-4 mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selected === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleClick(cat)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Category;
