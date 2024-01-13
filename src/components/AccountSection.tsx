import { useParams } from "react-router-dom"

export const AccountSection = () => {
  const value = useParams()
  console.log(value)
  return (
    <div>AccountSection</div>
  )
}
