import prisma from "../../../../libs/prisma"

export async function POST(request) {
    if (request.method === "POST") {
        const {todo, deadline, timeEnd} = await request.json()
        const data = {todo, deadline, timeEnd}
        await prisma.todo.create({
            data
        })
        return Response.json({
            success: true
        })
    }
}