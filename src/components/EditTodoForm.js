import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [valeu, setValeu] = useState(task.task)
    const handleSubmit = e => {
        e.preventDefault()
        editTodo(valeu, task.id)
        setValeu('')
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={valeu} placeholder='what is the task' onChange={(e) => setValeu(e.target.value)}/>
            <button type='submit' className='todo-btn'>update task</button>
        </form>
    )
}