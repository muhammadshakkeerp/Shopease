import { Link } from "react-router-dom"
import { accountLinks } from "../assets/globalUtlities"
import { useState } from "react"

export const AccountSidebar = () => {
  const [showActiveRoute, setShowActiveRoute] = useState("")
  console.log(showActiveRoute)
  return (
    <ul className="flex justify-center xl:justify-start xl:flex-col">
      {accountLinks?.map((item) => <Link key={item?.id} to={`/account/${item?.id}`}><li className={`p-5 xl:px-2 xl:py-4 text-start border font-semibold hover:bg-primary/50 ${item.id === showActiveRoute ? "bg-primary/50" : ""}`} onClick={() => setShowActiveRoute(item.id)}>{item.value}</li></Link>)}
    </ul>
  )
}
