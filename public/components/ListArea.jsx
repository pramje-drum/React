import ContentComponent from "./ContentComponent"
import Labels from "./Labels"

const ListArea = () => {
  return (
    <div>


        {/* label-container */}
      <div>
        <Labels />
      </div>


      {/* list area where all items will be shown */}
      <div>
        <ContentComponent category = "Fruits" />
        <ContentComponent category = "Vegetables" />

      </div>
    </div>
  )
}

export default ListArea
