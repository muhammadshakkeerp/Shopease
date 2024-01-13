import { Link } from "react-router-dom"
import { accountLinks } from "../assets/globalUtlities"


export const AccountSidebar = () => {
  return (
    <div className='hidden xl:block'>
      <ul>
        {accountLinks?.map((item) => <Link key={item?.id} to={`/account/${item?.id}`}><li>{item.value}</li></Link>)}
      </ul>
    </div>
  )
}
