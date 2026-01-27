// import CompletedTasks from "./CompletedTasks"
// import NotCompletedTasks from "./NotCompletedTasks"
import Tasks from "./Tasks"

const ListContainer = () => {
  return (
    <div className="border p-2 h-190 flex">
      {/* completed */}
      <div>
        <Tasks status="Completed"/>
      </div>
      {/* not-completed */}
      <div>
        <Tasks status="Not-Completed"/>
      </div>
    </div>
  )
}

export default ListContainer
