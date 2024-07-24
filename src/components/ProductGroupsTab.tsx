import { headerCategories } from "../assets/headerCategoryData"

export const ProductGroupsTab = () => {
    return (
        <ul className="h-[40px] flex items-center justify-evenly">{headerCategories?.map((category, index) => <li key={index} className="text-[14px] font-semibold">{category.title}</li>)}
        </ul>
    )
}
