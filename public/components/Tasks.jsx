import ContentArea from "./ContentArea"

const Tasks = ({status}) => {
  return (
    <div className="border-3 m-2 p-5 w-183 h-180">
        <div className="border flex justify-center font-bold text-4xl p-5 italic">
            <h1>{status}</h1>
        </div>

        <div>
            
            <ContentArea/>
        </div>
    </div>
  )
}

export default Tasks
