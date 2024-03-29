import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [valeu, setValeu] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        addTodo(valeu)
        setValeu('')
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={valeu} placeholder='what is the task' onChange={(e) => setValeu(e.target.value)}/>
            <button type='submit' className='todo-btn'>add task</button>
        </form>
    )
}