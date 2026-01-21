import ListArea from "./ListArea"
import SearchArea from "./SearchArea"

const ShoppingProject = () => {
  return (
    <div>
         {/* Search wala div */}
        <div>
            <SearchArea/>
        </div>

        {/* list wala div */}
        <div>
            <ListArea/>
        </div>
    </div>
  )
}

export default ShoppingProject
