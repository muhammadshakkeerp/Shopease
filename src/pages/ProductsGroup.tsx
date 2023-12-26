import { rowProductsData } from "../assets/globalUtlities"
import { ProductCard, ProductFilterSiderbar, ProductGroupsTab } from "../paths"

const ProductsGroup = () => {
  return (
    <div className="mt-1 md:mt-2">
      <ProductGroupsTab />
      <section className="flex flex-col xl:flex-row mt-2">
        <ProductFilterSiderbar />
        <div className="flex flex-wrap justify-between gap-2 bg-black ml-2" >
          {rowProductsData?.map((_item, index) => <ProductCard product={undefined} index={index} />)}
        </div>
      </section>
    </div>
  )
}

export default ProductsGroup
