import { BiChevronDown } from "react-icons/bi";
import { FC, useState } from "react";
import {
  headerCategories,
  groceryCategories,
  electronicsCategories,
} from "../assets/HeaderCatogoryData";

export const HeaderCatogory: FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (category: string) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="flex gap-2 flex-shrink-0 justify-between bg-[#e4adff] md:bg-white md:gap-3 header-category-img-p overflow-x-scroll">
      {headerCategories?.map((category, index) => (
        <div
          key={index}
          className="mob-header-category-img-p cursor-pointer md:header-category-img-p group"
          onMouseEnter={() => handleMouseEnter(category.title)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={category.img}
            alt={category.title}
            className="w-[90px] object-cover"
          />
          <span className="flex">
            <h6 className="primary-font font-semibold">{category.title}</h6>
            <span className="transition-transform ease-in-out group-hover:rotate-180">
              <BiChevronDown />
            </span>
          </span>
          {/* Display subcategories on hover */}
          {hoveredCategory === category.title && (
            <ul>
              {category.title === "Grocery" &&
                groceryCategories.map((subCategory, subIndex) => (
                  <li key={subIndex} className="cursor-pointer category-font">
                    {subCategory.category}
                  </li>
                ))}
              {category.title === "Electronics" &&
                electronicsCategories.map((subCategory, subIndex) => (
                  <li key={subIndex} className="cursor-pointer category-font">
                    {subCategory.category}
                  </li>
                ))}
              {/* Add similar blocks for other categories */}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
