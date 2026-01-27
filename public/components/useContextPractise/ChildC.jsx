import { useContext } from "react"
import { UserContext } from "./Parent"
const ChildC = () => {
    const user = useContext(UserContext)
  return (
    <div>
      End of the nested Components.
      Data : {user.name}
    </div>
  )
}

export default ChildC
