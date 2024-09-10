import { BiChevronDown } from "react-icons/bi";
import { FC, useMemo, useState } from "react";
import { HeaderCategoryProps } from "../types/layoutTypes";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { headerCategories } from "../assets/headerCategoryData";

interface headerCategoriesProps {
  headerCategories: HeaderCategoryProps[]
}

export const HeaderCategory: FC<headerCategoriesProps> = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  // const [findSubCategory, setFindSubCategory] = useState<
  //   SubCategory[] | undefined
  // >([]);

  // Darkmode
  const DarkMode = useSelector((state: RootState) => state?.dark)

  const handleMouseEnter = (categoryName: string) => {
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };
  const handleHoverCategory = useMemo(() => (categoryName: string) => {
    // setFindSubCategory(foundSubCategory);
    const foundCategory = headerCategories?.find((item: HeaderCategoryProps) => item.title === categoryName)
    // setFindSubCategory(foundCategory?.subCategories || [])
    return foundCategory?.subCategories || []
    // console.log(foundCategory?.subCategories)
  }, [])

  return (
    <div className={`flex gap-1 flex-shrink-0 justify-between ${DarkMode?.isEnabled ? "bg-slate-800 text-white" : ""}  md:gap-3 header-category-img-p  relative`}>
      {headerCategories?.map((category, index) => (
        <Link to="/productsGroup" key={index}>
          <div

            className="mob-header-category-img-p -[15px] cursor-pointer md:header-category-img-p group flex flex-col justify-between relative group"
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
                className={`hidden md:block absolute w-[200px] transform origin-top -translate-y-10 group-hover:-translate-y-0 transition-transform duration-300 top-[120px] left-0 ${DarkMode ? "bg-darkModeBg/90 border border-white/50 text-darkModeText" : "bg-white"} shadow-2xl shadow-slate-700 px-2 py-1 rounded-sm z-50`}
              >
                {/* {findSubCategory &&
                  Array.from(findSubCategory)?.map((item, subIndex) => (
                    <li
                      key={subIndex}
                      className="primary-font font-semibold py-2 px-1 cursor-pointer hover:bg-slate-600"
                    >
                      {item?.category}
                    </li>
                  ))} */}
                {handleHoverCategory(category.title)?.map((item, subIndex) => (
                  <li
                    key={subIndex}
                    className="primary-font font-semibold py-2 px-1 cursor-pointer hover:bg-slate-600"
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
