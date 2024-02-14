import { Link } from "react-router-dom"
import { accountLinks } from "../assets/globalUtlities"


export const AccountSidebar = () => {
  return (
    <ul>
      {accountLinks?.map((item) => <Link key={item?.id} to={`/account/${item?.id}`}><li className="xl:px-2 xl:py-4 text-start border font-semibold hover:bg-primary/50 ">{item.value}</li></Link>)}
    </ul>
  )
}
