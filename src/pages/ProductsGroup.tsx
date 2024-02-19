import { useSelector } from "react-redux"
import { rowProductsData } from "../assets/globalUtlities"
import { ProductCard, ProductFilterSiderbar, ProductGroupsTab } from "../paths"
import { RootState } from "../redux/store"

const ProductsGroup = () => {
  const darkMode = useSelector((state: RootState) => state?.dark)
  return (
    <div className={`mt-1 md:mt-2 ${darkMode?.isEnabled ? "bg-darkModeBg" : "bg-white"} `}>
      <ProductGroupsTab />
      <section className="flex flex-col xl:flex-row mt-2">
        <ProductFilterSiderbar />
        <div className="flex flex-wrap gap-2  ml-2" >
          {rowProductsData?.map((item, index) => <ProductCard product={item} index={index} refreshSite={false} />)}
        </div>
      </section>
    </div>
  )
}

export default ProductsGroup





