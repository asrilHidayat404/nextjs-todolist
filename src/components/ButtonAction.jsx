"use client"

import axios from "axios"
import { useRouter } from "next/navigation"

const ButtonAction = ({ id, status }) => {
    const router = useRouter()
    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await axios.post("/controller/api/delete", { id }).then(res => res)
        if (res.data.success) {
            router.refresh("/")
        }
        console.log(res.data)
    }
    const handleStatus = async (e) => {
        e.preventDefault()
        const res = await axios.post("/controller/api/changeStatus", { id, status }).then(res => res)
        if (res.data.success) {
            router.refresh("/")
            console.log(res.data)
        }
    }
    return (
        <div className='space-x-4'>
            <button 
                onClick={handleDelete}
                className='absolute -right-2 -top-2 bg-red-600 w-5 h-5 rounded-full flex justify-center items-center'>x</button>

            <button
                onClick={handleStatus}
                className='text-slate-100 bg-green-600 py-1 px-3 rounded-xl font-semibold hover:bg-green-400'>
                {!status ? 'Done' : 'Undone'}
            </button>
            <button
                className='text-slate-100 bg-blue-600 py-1 px-3 rounded-xl font-semibold hover:bg-blue-400'>
                Update
            </button>
        </div>
    )
}

export default ButtonAction