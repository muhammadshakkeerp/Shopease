// NestedHoverNavlink.tsx

import { FC, useState } from "react";

interface SubItem {
  subName: string;
  id: string;
}

interface SubCategory {
  name: string;
  id: string;
  subItem: SubItem[];
}

interface Category {
  title: string;
  id: string;
  subCategories: SubCategory[];
}

const groceryCategories: Category[] = [
  {
    title: "Fruits & Vegetables",
    id: "fruits-vegetables",
    subCategories: [
      {
        name: "Fresh Fruits",
        id: "fresh-fruits",
        subItem: [
          { subName: "Apple", id: "apple" },
          { subName: "Apple", id: "apple" },
          { subName: "Apple", id: "apple" },
        ],
      },
      {
        name: "Fresh Vegetables",
        id: "fresh-vegetables",
        subItem: [
          { subName: "Chilly", id: "chilly" },
          { subName: "Chilly", id: "chilly" },
          { subName: "Chilly", id: "chilly" },
        ],
      },
      {
        name: "Exotic Fruits",
        id: "exotic-fruits",
        subItem: [
          { subName: "Strawberry", id: "strawberry" },
          { subName: "Strawberry", id: "strawberry" },
          { subName: "Strawberry", id: "strawberry" },
        ],
      },
    ],
  },
  // Add more grocery categories as needed
];

const fashionCategories: Category[] = [
  {
    title: "Clothing",
    id: "clothing",
    subCategories: [
      {
        name: "T-Shirts",
        id: "t-shirts",
        subItem: [{ subName: "Casual", id: "casual" }],
      },
      {
        name: "Dresses",
        id: "dresses",
        subItem: [{ subName: "Summer Dresses", id: "summer-dresses" }],
      },
      {
        name: "Jeans",
        id: "jeans",
        subItem: [{ subName: "Skinny Jeans", id: "skinny-jeans" }],
      },
    ],
  },
  // Add more fashion categories as needed
];

const furnitureCategories: Category[] = [
  {
    title: "Living Room",
    id: "living-room",
    subCategories: [
      {
        name: "Sofas",
        id: "sofas",
        subItem: [{ subName: "Sectional Sofas", id: "sectional-sofas" }],
      },
      {
        name: "Coffee Tables",
        id: "coffee-tables",
        subItem: [
          { subName: "Modern Coffee Tables", id: "modern-coffee-tables" },
        ],
      },
      {
        name: "Bookshelves",
        id: "bookshelves",
        subItem: [
          { subName: "Floating Bookshelves", id: "floating-bookshelves" },
        ],
      },
    ],
  },
  // Add more furniture categories as needed
];

const NestedHoverNavlink: FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubCategory, setHoveredSubCategory] = useState<string | null>(
    null
  );

  const handleCategoryHover = (categoryId: string) => {
    setHoveredCategory(categoryId);
    setHoveredSubCategory(null);
  };

  const handleSubCategoryHover = (subCategoryId: string) => {
    setHoveredSubCategory(subCategoryId);
  };

  return (
    <div className="flex space-x-4">
      {groceryCategories
        .concat(fashionCategories, furnitureCategories)
        .map((category) => (
          <div
            key={category.id}
            className="relative group"
            onMouseEnter={() => handleCategoryHover(category.id)}
          //   onMouseLeave={() => handleCategoryHover(null)}
          >
            <span className="text-lg font-semibold cursor-pointer">
              {category.title}
            </span>
            {hoveredCategory === category.id && (
              <div className="absolute z-50 left-0 mt-2 p-2 bg-white border rounded-md shadow-lg">
                {category.subCategories.map((subCategory) => (
                  <div
                    key={subCategory.id}
                    className="mb-2"
                    onMouseEnter={() => handleSubCategoryHover(subCategory.id)}
                  //   onMouseLeave={() => handleSubCategoryHover(null)}
                  >
                    <span className="font-semibold cursor-pointer">
                      {subCategory.name}
                    </span>
                    {hoveredSubCategory === subCategory.id && (
                      <ul className=" absolute bg-gray-800 text-white w-[200px] -right-[160px]">
                        {subCategory.subItem.map((item) => (
                          <li key={item.id} className="ml-4 cursor-pointer">
                            {item.subName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default NestedHoverNavlink;
