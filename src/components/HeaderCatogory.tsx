import { BiChevronDown } from "react-icons/bi";
import { FC, useState } from "react";
import { headerCategories } from "../assets/HeaderCatogoryData";
import { HeaderCategory, SubCategory } from "../assets/types";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

interface headerCategoriesProps {
  headerCategories: HeaderCategory[]
}

export const HeaderCatogory: FC<headerCategoriesProps> = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [findSubCetogory, setFindSubCetogory] = useState<
    SubCategory[] | undefined
  >([]);

  // Darkmode
  const DarkMode = useSelector((state: RootState) => state?.dark)

  const handleMouseEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  const handleHoverCategory = (categoryName: string) => {
    let foundSubCategory: SubCategory[] | undefined;
    if (categoryName) {
      const foundCategory = headerCategories.find(
        (item) => item.title === categoryName
      );
      if (foundCategory && foundCategory.subCategories) {
        foundSubCategory = foundCategory.subCategories;
      } else {
        foundSubCategory = undefined;
      }
    }
    setFindSubCetogory(foundSubCategory);
  };

  return (
    <div className={`flex   gap-1 flex-shrink-0 justify-between ${DarkMode?.isEnabled ? "bg-slate-800 text-white" : "bg-[#e4adff] md:bg-white"}  md:gap-3 header-category-img-p  relative`}>
      {headerCategories?.map((category, index) => (
        <Link to="/productsGroup" key={index}>
          <div

            className="mob-header-category-img-p cursor-pointer md:header-category-img-p group flex flex-col justify-between relative"
            onMouseEnter={() => handleMouseEnter(category.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={category.img}
              alt={category.title}
              className="w-[60px] md:w-full object-cover"
              onMouseEnter={() => handleHoverCategory(category.title)}
            />
            <span className="flex">
              <h6 className="primary-font font-semibold">{category.title}</h6>
              <span className="hidden md:block transition-transform ease-in-out group-hover:rotate-180">
                <BiChevronDown />
              </span>
            </span>
            {/* Display subcategories on hover */}
            {hoveredCategory === category.title && (
              <ul
                onMouseEnter={() => handleHoverCategory(category.title)}
                className="hidden md:block absolute w-[200px] top-[120px] left-0 bg-white shadow-2xl shadow-slate-700 px-2 py-1 rounded-sm z-50"
              >
                {findSubCetogory &&
                  Array.from(findSubCetogory)?.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="primary-font font-semibold py-2 px-1 cursor-pointer"
                    >
                      {item?.category}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};
