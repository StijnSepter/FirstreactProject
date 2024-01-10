import React from 'react'

export const TodoForm = () => {
    return (
        <form className='TodoForm'>
            <input type='text' className='todo-input' placeholder='what is the task' />
            <button type='submit' className='todo-btn'>add task</button>
        </form>
    )
}