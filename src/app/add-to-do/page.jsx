"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import Form from '../../layouts/Form'

const page = () => {
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    const datas = {
      todo: formdata.get("todo"),
      deadline: formdata.get("date"),
      timeEnd: formdata.get("time")
    }
    console.log(datas)
    const res = await fetch("/controller/api/post", {
      method: "POST",
      body: JSON.stringify(datas)
    })
    const data = await res.json()
    router.refresh("/")
  }
  return (
    <div className='min-w-[75%] p-4 rounded-xl shadow-sm shadow-slate-100'>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default page