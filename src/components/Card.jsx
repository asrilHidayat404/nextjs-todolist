import prisma from "../libs/prisma"
import ButtonAction from "./ButtonAction";

const Card = async () => {
    const todos = await prisma.todo.findMany()
    console.log(todos)
    function padToTwoDigits(num) {
        return num.toString().padStart(2, '0');
    }
    return (
        <div className=" space-y-5">
            {
                todos?.map((todo, i) => {
                    return (
                        <div 
                            key={i} 
                            className={`${todo.done ? 'bg-green-700' : 'bg-[rgba(0,0,0,.5)]'} text-white flex justify-between items-center py-4 px-4 rounded-md relative`}>
                            <div className='space-y-3'>
                                <h1>{todo.todo}</h1>
                                <div className='flex gap-3'>
                                    <small className='text-[10px]'>Created At:</small>
                                    <small className='text-[10px]'>
                                        {padToTwoDigits(todo.createdAt.getHours())}:{padToTwoDigits(todo.createdAt.getMinutes())}
                                    </small>
                                    <small className='text-[10px]'>-</small>
                                    <small className='text-[10px]'>
                                        {todo.createdAt.getFullYear().toString()}-
                                        {padToTwoDigits(todo.createdAt.getMonth() + 1)}-{padToTwoDigits(todo.createdAt.getDate())}
                                    </small>
                                </div>
                                <div className='flex gap-3'>
                                    <small className='text-[10px]'>Deadline:</small>
                                    <small className='text-[10px]'>{todo.timeEnd}</small>
                                    <small className='text-[10px]'>-</small>
                                    <small className='text-[10px]'>{todo.deadline}</small>
                                </div>
                            </div>
                            <ButtonAction id={todo.id} status={todo.done}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card