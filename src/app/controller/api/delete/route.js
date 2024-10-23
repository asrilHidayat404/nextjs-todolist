import prisma from "../../../../libs/prisma"

export async function POST(request) {
    const {id} = await request.json()
    const res = await prisma.todo.delete({
        where: {
          id: Number(id),
        },
    })
      
    if (res) {
        return Response.json({
            success: true,
            message: "Success deleting todo"
        })
    }
}