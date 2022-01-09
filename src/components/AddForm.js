import Form from "./Form"

const AddForm = ({newTask}) => {
    return (
        <div className="form">
            <Form newTask={newTask}/>
        </div>
    )
}

export default AddForm