import React from 'react'

const Form = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-4">
                <label id="todo" className='font-bold text-white'>To Do:</label>
                <input type="text" placeholder="todo" name="todo" className="text-black p-2 rounded-md outline-2" />
            </div>

            <div className="flex flex-col gap-4">
                <label id="date" className='font-bold text-white'>Date: </label>
                <input type="date" name="date" className="text-black p-2 rounded-md outline-2" />
            </div>

            <div className="flex flex-col gap-4">
                <label id="time" className='font-bold text-white'>Time: </label>
                <input type="time" name="time" className="text-black p-2 rounded-md outline-2" />
            </div>
            <button type='submit' className='bg-orange-600 rounded-md py-2 text-white font-semibold hover:bg-o'>Submit</button>
        </form>
    )
}

export default Form