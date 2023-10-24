import { headerCategories } from "../assets/globalUtlities";
const HeaderCatogory = () => {
  return (
    <div className="flex gap-2 flex-shrink-0 justify-between bg-[#e4adff] md:bg-white md:gap-3 header-category-img-p overflow-x-scroll">
      {headerCategories?.map((category, index) => (
        <div key={index} className="mob-header-category-img-p md:header-category-img-p">
          <img src={category?.img} alt="header_category " className="w-[90px] object-cover" />
          <h6 className="primary-font" >{category?.title}</h6>
        </div>
      ))}
    </div>
  );
};

export { HeaderCatogory };
